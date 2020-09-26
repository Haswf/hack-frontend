import React, { Component } from "react";
import ListItem from "./ListItem";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../shared/theme";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Chips from "./Tag";
import axios from "../axios"
import { withRouter } from "react-router-dom";

const ListWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  max-width: 90%;
  display: block;
  margin: auto;
  padding: 70px 0 20px;
  position: relative;
  z-index: 10;
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    padding: 90px 0 50px;
  }
`;
const ListTitle = styled.h2`
  font-weight: normal;
  font-size: 22px;
  margin-bottom: 5px;
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;
const ListBreadcrumb = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 5px;
  color: ${props => props.theme.mediumGray};
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    margin-bottom: 20px;
  }
`;
const ListDragItem = styled.div`
  outline: none;
  position: relative;
  z-index: ${props => 99999 - props.order};
`;

class List extends Component {
  state = {
    listTags:JSON.parse(sessionStorage.getItem("tag_filter")),
    discussions: [],
    listTitle: "Featured for members",
    listBreadcrumb: "Home / Articles",
    items:[]
  };


  async componentDidMount() {
    const response = await axios.get("/discussions/", {});
    const discussions = response.data.data.discussions;
    var items =[];
    discussions.map(discussion => {
      var item =[];
      item["lastUser"] = discussion["author"].username;
      console.log(discussion);
      item["id"] = discussion["_id"];
      item["textValue"] = discussion["title"];
      item["hasActions"]= false;
      item["daysAgo"] = getTime(discussion["createdAt"]);
      items.push(item);
    });
    console.log(items);


    this.setState({items: items})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);

  }

  reorderItems = (startIndex, endIndex) => {
    const items = Array.from(this.state.items);
    const [removed] = items.splice(startIndex, 1);
    items.splice(endIndex, 0, removed);
    this.setState({ items });
  };

  onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;
    this.reorderItems(source.index, destination.index);
  };

  refreshItemsList = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      };
    });
  };

  render() {
    const { listTitle, listBreadcrumb, items } = this.state;
    return (
      <div>
        <Chips/>
      <ThemeProvider theme={theme}>
        <ListWrapper>
          <ListTitle>{listTitle}</ListTitle>
          <ListBreadcrumb >{listBreadcrumb}</ListBreadcrumb>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppabe-list" >
              {(provided, snapshot) => (
                <div ref={provided.innerRef}>
                  {items.map((number, key) => (
                    <Draggable

                      key={key}
                      index={key}
                    >
                      {(provided, snapshot) => (

                        <ListDragItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          order={key}
                          button onClick={() => this.props.history.push(`/discussions/${number.id}`)}
                         id={number.id}>
                          <ListItem
                            number={number}
                            dragging={snapshot.isDragging}
                            onDeleteItem={this.refreshItemsList}
                          />
                        </ListDragItem>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </ListWrapper>
      </ThemeProvider>
        </div>
    );
  }
}

function getTime(time2){
  //moment(props.date).fromNow()
  var myDate = new Date();
  var time1;
  if(myDate.getMonth()<10){
    time1 = myDate.getFullYear()*10000+ (myDate.getMonth()+1)*100+ myDate.getDate();
  }
  else{
    time1 = myDate.getFullYear()*1000+ (myDate.getMonth()+1)*100+ myDate.getDate();
  }
  var time_2 =0;
  var num =1;
  for(var i=9;i>=0;i--){
      if(time2[i]!='-'){
        time_2 += (parseInt(time2[i]))*num;
        num = num*10;
      }
  }


  return time1-time_2;
}




export default withRouter(List);
