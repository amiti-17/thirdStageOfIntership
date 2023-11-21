import { useContext } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Day } from "./components/Day/Index";
import { WeatherContext } from "context/WeatherContext";
import { cssConstants } from "config/system/constants/cssConstants";

export const ModalWrapper = () => {

  const { isModal, setIsModal, modalData } = useContext(WeatherContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModal}
      onRequestClose={() => {
        setIsModal(!isModal);
      }}>
      <View style={style.centeredView}>
        <View style={style.modalView}>
          <Text style={style.headerTextStyle}>{modalData.nameOfPlace}</Text>
          <View>
            {
              modalData?.days?.map(day => {
                return (
                  <Day key={day.dt} day={day} />
                )
              })
            }
          </View>
          <Pressable
            style={[style.button, style.buttonClose]}
            onPress={() => setIsModal(!isModal)}
          >
            <Text style={style.textStyle}>Hide Modal</Text>
          </Pressable>
        </View> 
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  headerTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    overflow: 'hidden',
    height: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: cssConstants.mainColor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})