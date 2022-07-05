import React from 'react'
import {View,Text} from 'react-native'
import {StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';


export default function AboutPage(){
  return (<SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Hi! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>
            </View>

            <View style={styles.innerContainer}>
                <View style={styles.containerImg}>
                <Image style={styles.cardImage} source={{uri:"https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"}}/>
                </View>
                <View style={styles.containerIntro}>
                    <Text style={styles.introSentence}>
                        많은 내용을 간결하게 담아내려 노력했습니다!
                    </Text>
                    <Text style={styles.addSentence}>
                        꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다
                    </Text>
                    <TouchableOpacity style={styles.introBtn}>
                       <Text style={styles.btnCol}>여러분의 인스타계정</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </SafeAreaView>)
}

const styles = StyleSheet.create({
    titleView:{
        flex:1,
        flexDirection:"column",
        width:"80%",
        alignSelf:"center",
    },
    title:{
        paddingTop:50,
        fontSize:26,
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
    },
    container:{
        backgroundColor:'darkblue',
        flex:1,
        position:"relative"
    },
    innerContainer:{
        backgroundColor:"white",
        width:"80%",
        height:"70%",
        borderRadius:20,
        justifyContent:"center",
        alignSelf:"center",
        flexDirection:"column",
        position:"absolute",
        top:"25%",
        overflow:"hidden",
    },
    containerImg:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
    },
    containerIntro:{
        flex:1,
        flexDirection:"column",
        alignSelf:"center",
        width:200
    },
    introSentence:{
        marginTop:10,
        flex:1,
        fontWeight:"900",
        fontSize:14,
        textAlign:"center"
    },
    addSentence:{
        flex:1,
        textAlign:"center",
        fontWeight:"500",
        fontSize:12
    },
    introBtn:{
        flex:2,
        paddingTop:10, 
        alignSelf:"center",
        borderRadius:15,
        width:100,
    },
    btnCol:{
        backgroundColor:"orange",
        height:50,
        width:120,
        color:"white",
        fontSize:11,
        textAlign:"center",
        alignSelf:"center",
        paddingTop:20,
        borderRadius:15,
        overflow:"hidden"
    },
    cardImage:{
        marginTop:30,
        width:150,
        height:150,
        borderRadius:20
    }
})