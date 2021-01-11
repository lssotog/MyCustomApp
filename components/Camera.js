import React, {useRef, useState} from 'react';
import {Image, Modal, StyleSheet, Text, View, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function Camera() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const cameraRef = useRef(null);

  const takePic = async () => {
    if (cameraRef?.current) {
      const options = {quality: 0.5, base64: true, doNotSave: true};
      const data = await cameraRef?.current?.takePictureAsync(options);

      setShowModal(true);
      setCurrentImage(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Camera</Text>
      <Modal style={styles.modal} animationType="slide" visible={showModal}>
        <Text>Preview</Text>
        <Image
          style={styles.image}
          source={{
            uri: currentImage
              ? `data:image/gif;base64,${currentImage.base64}`
              : '',
          }}
        />
        <Button
          title="close modal"
          color="red"
          onPress={() => setShowModal(false)}
        />
      </Modal>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <Button title="Press here to take a picture" onPress={takePic} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rectangle: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
  },
  camera: {
    flex: 1,
    height: null,
    width: '100%',
  },
  image: {
    flex: 1,
  },
});
