## Checking input language

### Languages:
- English
- Ukraine
- Group of cyrillic languages(only common letters)

### Unicode code ranges of characters:
- For English: [ 65 - 90, 97 - 122 ]
- For Cyrillic: [ 1024 - 1279 ]
- For Ukraine: [ 1028, 1030, 1031, 1040 - 1065, 1068, 1070 - 1097, 1100, 1102, 1103, 1108, 1110, 1111, 1168, 1169 ]

### Description
Check last input character.
If find English language return ```"English"```,   
Ukraine - return ```"Ukraine"```,   
check for cyrillic - return ```"Cyrillic"```    
and if don\`t find - return ```"I don`t know!"```   

For checking cyrillic letters need add the third parameter as ```true```   
By default this feature disabled.

### Example:    
``` new InputLang(id_of_input_element, function_callback(language_of_last_input_letter), check_cyrillic_defaut_false); ```

### Errors:
- Throw error when missed id of input element
- Throw error when missed callback function