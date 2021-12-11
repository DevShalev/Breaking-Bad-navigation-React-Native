import {StyleSheet} from 'react-native';

const StyleMoran = StyleSheet.create ({
    container:{flex:1,padding:5},
    containerFlat:{flex:1,width:'100%',backgroundColor:'#133B19',
    flexDirection:'row',marginTop:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,height:'100%',

    shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
           shadowOpacity:0.80,
            shadowRadius:10,
            elevation:10,
    
},
textFlat:{fontSize:18,fontWeight:'700',padding:10},



    

imageFlat:{width:'35%',height:'100%',resizeMode:'stretch',

},


imageHead:{width:'100%',height:100,justifyContent:'center',alignContent:'center',resizeMode:'contain',marginTop:30}
    ,shadow:{
        shadowColor:'#7f5df0',
        shadowOffset:{
            width:0,
            height:10
        },
            shadowOpacity:1,
            shadowRadius:10,
            elevation:7,
        },
        
    })
export default StyleMoran;