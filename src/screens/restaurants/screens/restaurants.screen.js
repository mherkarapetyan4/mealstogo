import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurnatsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurnatsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <Loading
            size={50}
            animating={isLoading}
            color={MD2Colors.orange300}
          />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restuarant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 15 }}
        ItemSeparatorComponent={<Spacer position={"bottom"} size={"large"} />}
      />
    </SafeArea>
  );
};
