import { Box,Heading,Text ,TextField,Button } from "@radix-ui/themes";
import { useRef } from "react";
import { apiClient } from "../../../shared/services/api-client";
import { useState } from "react";
export const UrlShort = () => {
    const url = useRef();
    const [shortURL,setShortURL] = useState();
    const takeURL = async () => {
      const URL=  url.current.value;
      try{
      const response = await apiClient.post('/short-url',{bigurl:URL});
      console.log('Response',response);
      if(response && response.data.shorturl){
        setShortURL(response.data.shorturl);
        console.log('Small URL is',response.data.shorturl);
      }  
      else{
        console.log('Some Problen in Short URL');
      }
    }
    catch(err){
        console.log('Some Problen in Short URL',err);

    }
      console.log("Get the URL",URL);
    };
    return ( <Box  width="400px"  mx = "auto" mt="6" height="64px">
        <Heading align="center">Url Shortener </Heading>
       
            <Box>
                <Text as ="label" size="3" weight="medium"> 
                    Big URL

                </Text>
                <TextField.Root ref={url} type="text" placeholder="Type Url here" />;
                <Button onClick={takeURL} variant="classic" type="button" size="3" style={{margin: 3 }}>
                    Short URL
                    </Button>
                    <a href={shortURL}>{shortURL}</a>
                </Box>
                </Box>
    );

};