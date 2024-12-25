import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://pmavbgmnytyhsdqcbwxn.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" width="400px"/>
    </Row>
  );
}

export default Cabins;
