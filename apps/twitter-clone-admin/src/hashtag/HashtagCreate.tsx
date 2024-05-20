import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TweetTitle } from "../tweet/TweetTitle";

export const HashtagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="tag" source="tag" />
        <ReferenceInput source="tweet.id" reference="Tweet" label="Tweet">
          <SelectInput optionText={TweetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
