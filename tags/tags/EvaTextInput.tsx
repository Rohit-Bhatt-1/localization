import React from 'react'
import { TextInput } from 'react-native'
import { myDirection } from '../../Localization';

const EvaTextInput = (props: any) => {

    return (
        <TextInput  {...props} style={{ ...props.style, textAlign: myDirection().start }} >
            {props.children}
        </TextInput>
    )
}

export default EvaTextInput;
