import React, { Component } from "react";
import ListItem from "./ListItem";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../shared/theme";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Chips from "./Tag";
import axios from "../axios"
import dis from "./dis";

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
    discussions: [],
    listTitle: "Featured for members",
    listBreadcrumb: "Home / Articles",
    items: [
      {
        id: 0,
        hasActions: false,
        textValue: "I have a headache",
        lastUser: "Lida Brady",
        daysAgo: "5",
        image:
          "https://images.unsplash.com/photo-1542140372-de3e121eb11e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6feeb58669ba6adbd2aacc9c89391713&auto=format&fit=crop&w=200&q=80",
        person1_image:
          "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=200&q=80",
        person2_image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afb35d2683e102d67bcd70b87b100723&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 1,
        hasActions: true,
        textValue: "I think I have Covid19",
        lastUser: "Dan Abramov",
        daysAgo: "2",
        image:
          "https://images.unsplash.com/photo-1542149624-8a12d5285934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a91f847fdcc99b00a29d5a39a2b6f4b9&auto=format&fit=crop&w=200&q=80",
        person1_image:
          "https://images.unsplash.com/photo-1510665217504-ea639bd64d3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35eb579302184195d572e7f8caabaf23&auto=format&fit=crop&w=200&q=80",
        person2_image:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 2,
        hasActions: false,
        textValue: "I am dying",
        lastUser: "Flavio Copes",
        daysAgo: "6",
        image:
          "https://images.unsplash.com/photo-1542274368-443d694d79aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13f276041134f4982218e49b446bedb1&auto=format&fit=crop&w=200&q=80",
        person1_image:
          "https://images.unsplash.com/photo-1520810336800-28d1a1d41906?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0f86b0656f7f07126b142faf38927c1&auto=format&fit=crop&w=200&q=60",
        person2_image:
          "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77b4ffa2acda61616908a62c5c1209af&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 3,
        hasActions: true,
        textValue: "I got cancer, pleas help!",
        lastUser: "Casper Beyer",
        daysAgo: "2",
        image:
          "https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c00cb83d290ac6e0b59ac95fcf46ee0e&auto=format&fit=crop&w=200&q=80",
        person1_image:
          "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77b4ffa2acda61616908a62c5c1209af&auto=format&fit=crop&w=200&q=80",
        person2_image:
          "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=200&q=80"
      }
    ]
  };

  async componentDidMount() {
    const response = await axios.get("/discussions/", {});
    console.log(response)
    this.setState({discussions: response.data.data.discussions})
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
                          button onClick={()=>toComment(key,items)}
                        >
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

function toComment(id,items){
  console.log(items);
  //window.location.assign(`http://localhost:3000/comments`);
  console.log(id);
  if(id===1) {
    console.log("!!!!!!!!!!!!!!!!!!");
  }

}

export default List;
