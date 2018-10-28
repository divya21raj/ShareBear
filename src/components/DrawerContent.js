import React, { Component } from 'react';

import {
    StyleSheet,
    Image,
    Text
  } from "react-native";

import { Container, Content, Header, Body, DrawerItems } from 'native-base'

export default class DrawerContent extends Component {
  render() {
    console.log("DC")
    console.log({...this.props})
      return (
          <Content style={{ backgroundColor: '#FFFFFF' }}>
              <Text style={{ margin: 20 }}>Drawer</Text>
          </Content>
      );
  }
}

// export default class DrawerContent extends Component {
//   render() {
//       console.log("DC")
//       console.log(this.props)
//       return (
//         <Container>
//         <Header style={styles.drawerHeader}>
//           <Body>
//             <Image
//               style={styles.drawerImage}
//               source={require('../assets/DrawerIcons/logo.png')} />
//           </Body>
//         </Header>
//         <Content>
//           <DrawerItems {...this.props} />
//         </Content>
//       </Container>
//       );
//   }
// }

// const DrawerContent = (props) => (
//     <Container>
//       <Header style={styles.drawerHeader}>
//         <Body>
//           <Image
//             style={styles.drawerImage}
//             source={require('../assets/DrawerIcons/logo.png')} />
//         </Body>
//       </Header>
//       <Content>
//         <DrawerItems {...props} />
//       </Content>
//     </Container>
//   );


const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    drawerHeader: {
      height: 200,
      backgroundColor: 'white'
    },
    drawerImage: {
      height: 150,
      width: 150,
      borderRadius: 75
    }
  
  })

// export {DrawerContent};