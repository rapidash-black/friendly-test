import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TweetList } from "./tweet/TweetList";
import { TweetCreate } from "./tweet/TweetCreate";
import { TweetEdit } from "./tweet/TweetEdit";
import { TweetShow } from "./tweet/TweetShow";
import { HashtagList } from "./hashtag/HashtagList";
import { HashtagCreate } from "./hashtag/HashtagCreate";
import { HashtagEdit } from "./hashtag/HashtagEdit";
import { HashtagShow } from "./hashtag/HashtagShow";
import { FollowerList } from "./follower/FollowerList";
import { FollowerCreate } from "./follower/FollowerCreate";
import { FollowerEdit } from "./follower/FollowerEdit";
import { FollowerShow } from "./follower/FollowerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TwitterClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tweet"
          list={TweetList}
          edit={TweetEdit}
          create={TweetCreate}
          show={TweetShow}
        />
        <Resource
          name="Hashtag"
          list={HashtagList}
          edit={HashtagEdit}
          create={HashtagCreate}
          show={HashtagShow}
        />
        <Resource
          name="Follower"
          list={FollowerList}
          edit={FollowerEdit}
          create={FollowerCreate}
          show={FollowerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
