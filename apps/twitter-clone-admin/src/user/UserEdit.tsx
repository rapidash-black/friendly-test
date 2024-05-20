import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TweetTitle } from "../tweet/TweetTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <div />
        <ReferenceArrayInput
          source="tweets"
          reference="Tweet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TweetTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
        <TextInput label="walletAddress" source="walletAddress" />
        <TextInput label="walletProvider" source="walletProvider" />
        <TextInput label="walletType" source="walletType" />
      </SimpleForm>
    </Edit>
  );
};
