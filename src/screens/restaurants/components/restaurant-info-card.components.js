import React from "react";
import { Text } from "react-native";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Address,
  Info,
  Section,
  SectionEnd,
  Rating,
  Open,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variaant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position={"left"} size={"large"}>
              {isOpenNow && <Open xml={openIcon} width={20} height={20} />}
            </Spacer>
            <Spacer position={"left"} size={"large"}>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
