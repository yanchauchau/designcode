import React from "react";
import styled from "styled-components/native";
/*import CustomButton from "./CustomButton";*/
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Categories from "./Components/Categories.js";
import Card from "./Components/Cards.js";

const items = [
  { text: "Fruits" },
  { text: "Bread" },
  { text: "Drinks" },
  { text: "Veggies" },
  { text: "Meat" },
  { text: "Paper Goods" },
  { text: "Drinks" },
  { text: "Veggies" },
  { text: "Meat" },
  { text: "Paper Goods" },
  { text: "Drinks" },
  { text: "Veggies" },
  { text: "Meat" },
  { text: "Paper Goods" },
  { text: "Drinks" },
  { text: "Veggies" },
  { text: "Meat" },
];

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar_eva.png")} />
            <Title>Welcome back,</Title>
            <Name>Eva</Name>
            <Ionicons
              name="md-cart"
              size={32}
              color="red"
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            horizontal={true}
            style={{
              padding: 20,
              paddingleft: 12,
              paddingtop: 30,
              flexDirection: "row",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {items.map((category, index) => (
              <Categories name={category.text} key={index} />
            ))}
          </ScrollView>
          <Subtitle>Items</Subtitle>
          <ItemsLayout>
            <ColumnOne>
              <Card />
            </ColumnOne>
            <ColumnTwo>
              <Card />
            </ColumnTwo>
          </ItemsLayout>
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`;

const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`;

const ColumnOne = styled.View``;

const ColumnTwo = styled.View``;
