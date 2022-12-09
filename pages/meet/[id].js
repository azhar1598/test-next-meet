import dynamic from "next/dynamic";

const ComponentWithNoSSR = dynamic(() => import("../../component/MeetPage"), {
  ssr: false,
});

const MeetPage = ({ query }) => {
  return <ComponentWithNoSSR />;
};

export default MeetPage;
