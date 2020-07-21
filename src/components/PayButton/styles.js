import styled from 'styled-components/native';
import { LinearGradient } from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';

// touchebleOpacity

// export const Button = styled.Text`
//    font-size: 20px;
// `
// export const Button = styled.LinearGradient`
//   width: 60px;
//   height: 60px;
//   border-radius: 30px;
//   align-items: center;
//   justify-content: center
// `

export default function Button() {
    return ( 

            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                //style={styles.linearGradient}
            >
            </LinearGradient>  
    );
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop:16,
    width:350,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});