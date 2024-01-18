import TaskBlock from "./components/taskBlock";
import WebsiteTemplate from "./templates/websiteTemplate";

function App() {
  return (
    <main>
      <WebsiteTemplate>
        <div
          className="flex max-md:flex-col gap-y-4 
          md:gap-x-16"
        >
          <TaskBlock title={"Hourly"} />
          <TaskBlock title={"Daily"} />
          <TaskBlock title={"Todo"} />
        </div>
      </WebsiteTemplate>
    </main>
  );
}

export default App;
