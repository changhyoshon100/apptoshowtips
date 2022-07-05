import React from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity,SafeAreaView} from 'react-native'
import data from '../data.json';

export default function DetailPage(){
    const tip = data.tip;
    
    return (
        <SafeAreaView style={styles.allArea}>
            
            <Image style={styles.aboutImage} source={{uri:tip[9]['image']}} resizeMode={"cover"}/>
            <Text style={styles.desc01}>렌탈 서비스 금액 비교해보기</Text>
            <Text style={styles.desc02}>요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 
            보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과
             구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다.</Text>
            <View style={styles.middle}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.col}>팁 찜하기</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    allArea:{
        backgroundColor:"black",
    },
    aboutImage:{
        width:"100%",
        height:"50%",
        borderRadius:15
        
    },
    desc01:{
        color:"white",
        textAlign:"center",
        paddingTop:20,
        fontSize:20,
        fontWeight:"bold"

    },
    desc02:{
        color:"white",
        paddingHorizontal:10,
        paddingTop:10
    },
    middle:{
        alignItems:"center"
    },
    btn:{
        color:"white",
        marginTop:10,
        // backgroundColor:"red",
        color:"blue",
        width:100,
        height:50,
        borderRadius:10,
        borderColor:"red",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        // borderBottomColor:"black",
        
    },
    col:{
        color:"white"
    }
})
