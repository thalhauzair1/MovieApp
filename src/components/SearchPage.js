import { Input, InputField, InputIcon, InputSlot, SearchIcon, Text, VStack, HStack, Button, ButtonText, ButtonIcon } from "@gluestack-ui/themed"
import SortDropDown from "./SortDropDown";
import { useState } from "react";
import { searchList } from "./api";
import Card from "./Card";
import { ScrollView } from "react-native";

const SearchPage = ({navigation}) => {
    const [sortBy, setSortBy] = useState('movie');
    const [list, setList] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState('');


    const handleInputChange = (value) => {
        setSearchValue(value);
    };

    const handleButtonPress = async () => {
        try {
            setLoading(true);
            console.log(sortBy)
            const fetchList = await searchList(sortBy,searchValue);
            setList(fetchList.results);
           
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
            console.log(navigation)
        }
    };

    const handleSelectChange = (selectedValue) => {
        setSortBy(selectedValue);
    };
    const sortingOptions = [
        { label: 'movie', value: 'movie' },
        { label: 'tv', value: 'tv' },
        { label: 'multi', value: 'multi' },

    ];
    return (
        <VStack gap={10}>
            <VStack>
            <Text> Search Movie/TV Show Name</Text>
 
            <Input w="80%" alignSelf="center" borderColor='$indigo600'>
                <InputSlot pl="$3">
                    <InputIcon as={SearchIcon} color="$indigo600"/>
                </InputSlot>
                <InputField
                    placeholder="Search..."
                    value={searchValue}
                    onChangeText={handleInputChange}
                />       
         </Input>
         </VStack>
         <VStack gap={10}>
            <Text>Choose Search Type </Text>
            <HStack gap={20} alignItems="center" justifyContent="center" >
                <SortDropDown onValueChange={handleSelectChange} options={sortingOptions} width="70vw" defaultValue="movie" />

                <Button
                bg="$indigo600"
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={handleButtonPress}
                    alignSelf="flex-end"  
                >
                    <ButtonText>Search </ButtonText>
                    <ButtonIcon as={SearchIcon} />
                </Button>
            </HStack>
            <Text>Please select a search Type</Text>
            </VStack>

            {loading ? (
                <Text  m={125}  fontWeight="$bold" fontSize="$xl">Loading...</Text>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : list && list.length > 0 ? (
                <ScrollView  pagingEnabled>
                <VStack space="md">
                    {list.map((singleList) => (
                        <Card key={singleList.id} id={singleList.id} object={singleList} type={sortBy =="multi" ? singleList.media_type : sortBy}
                        navigation={navigation} />
                    ))}
                </VStack>
                </ScrollView>
            ) : (
                <Text>Nothing Found.</Text>
            )}


        </VStack>




    )
}

export default SearchPage