import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();
  return <view>
    <text>This is home</text>
    <text bindtap={() => nav("/")}>back</text>
  </view>
}
export default Home;
