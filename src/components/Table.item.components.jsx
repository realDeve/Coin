import React, { useEffect } from 'react';
import { Box, Text,Divider } from '@chakra-ui/core';





export default function TableItemComponents(props){

  console.log(props);



 useEffect(() => {
   console.log(props);
   console.log("hello world");
   return () => {
     
   }
 }, []);

  
   
    return(

      
      <Box cursor="pointer">
        <Box d="flex" 
        mt="5"
       p={2} 
       color="#fff" 
       justifyContent="space-between">
         
       <Text       
         ml="70px"
         width="15%"  >
       1 Bitcoin
       </Text> 
       <Text>
       $ 8,376.36
       </Text>
       <Text>
         
       </Text>
       <Text mr="50px">
        -3.59%
       </Text>
       </Box>
       <Divider height="1px"mt="5" borderColor="#171923" bg="#171923" />
       </Box>
    
    )
}