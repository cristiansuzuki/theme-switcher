import React from "react";

import { Container, Card, Text } from "./styles";

const Cards: React.FC = () => {
  return (
    <Container>
      <Card>
        <Text>Eu</Text>
      </Card>

      <Card>
        <Text> Sou um</Text>
      </Card>

      <Card>
        <Text> Componente</Text>
      </Card>
    </Container>
  );
};

export default Cards;
