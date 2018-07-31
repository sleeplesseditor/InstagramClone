import React, { Component } from 'react';
import ActionSheet from 'react-native-actionsheet';
import { StyleSheet, TextInput, View } from 'react-native';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            tag: ''
        };
    }

  onAddImage() {
    this.addImageActionSheet.show();
  }

  //Trigger Image Library
  onAddImageActionSheetPress(index) {
      if(index !== Home.AddImageCancelButtonIndex) {
          const methodName = (index === Home.AddImageFromGalleryButtonIndex) ? 'launchImageLibrary' : 'launchCamera';
          ImagePicker[methodName]({}, response => {
              if(response.error) {
                  console.log(response.error);
                  return;
              }
              !response.didCancel && response.data && this.onImageDataResolved(response);
          });
      }
  }

  onImageDataResolved(imageData) {
      this.props.navigation.navigate('ImageEditor', { imageData });
  }

  render() {
    return (
        <View>
            <View>
            </View>
            <ActionSheet 
                /** Saving reference of action sheet **/
                ref={(o) => this.addImageActionSheet = o}
                options={this.props.language.home.addImageOptions}
                cancelButtonIndex={Home.AddImageCancelButtonIndex}
                onPress={this.onAddImageActionSheetPress.bind(this)}
            />
        </View>
    )
  }
}

export default Home;