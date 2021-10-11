import { authorIcon, artIcon } from "../components/icon";
import { MdPages } from "react-icons/md";

import {
  titleAndSlugField,
  selectField,
  locationField,
  imageField,
  textField,
  simpleRichtextField,
  imageGalleryField,
  featuredEventsField,
  seoField,
} from "../fields";

const nationality = [
  { title: "Afghan", value: "Afghan" },
  { title: "Albanian", value: "Albanian" },
  { title: "Algerian", value: "Algerian" },
  { title: "American", value: "American" },
  { title: "Andorran", value: "Andorran" },
  { title: "Angolan", value: "Angolan" },
  { title: "Antiguans", value: "Antiguans" },
  { title: "Argentinean", value: "Argentinean" },
  { title: "Armenian", value: "Armenian" },
  { title: "Australian", value: "Australian" },
  { title: "Austrian", value: "Austrian" },
  { title: "Azerbaijani", value: "Azerbaijani" },
  { title: "Bahamian", value: "Bahamian" },
  { title: "Bahraini", value: "Bahraini" },
  { title: "Bangladeshi", value: "Bangladeshi" },
  { title: "Barbadian", value: "Barbadian" },
  { title: "Barbudans", value: "Barbudans" },
  { title: "Batswana", value: "Batswana" },
  { title: "Belarusian", value: "Belarusian" },
  { title: "Belgian", value: "Belgian" },
  { title: "Belizean", value: "Belizean" },
  { title: "Beninese", value: "Beninese" },
  { title: "Bhutanese", value: "Bhutanese" },
  { title: "Bolivian", value: "Bolivian" },
  { title: "Bosnian", value: "Bosnian" },
  { title: "Brazilian", value: "Brazilian" },
  { title: "British", value: "British" },
  { title: "Bruneian", value: "Bruneian" },
  { title: "Bulgarian", value: "Bulgarian" },
  { title: "Burkinabe", value: "Burkinabe" },
  { title: "Burmese", value: "Burmese" },
  { title: "Burundian", value: "Burundian" },
  { title: "Cambodian", value: "Cambodian" },
  { title: "Cameroonian", value: "Cameroonian" },
  { title: "Canadian", value: "Canadian" },
  { title: "Cape verdean", value: "Cape verdean" },
  { title: "Central african", value: "Central african" },
  { title: "Chadian", value: "Chadian" },
  { title: "Chilean", value: "Chilean" },
  { title: "Chinese", value: "Chinese" },
  { title: "Colombian", value: "Colombian" },
  { title: "Comoran", value: "Comoran" },
  { title: "Congolese", value: "Congolese" },
  { title: "Costa rican", value: "Costa rican" },
  { title: "Croatian", value: "Croatian" },
  { title: "Cuban", value: "Cuban" },
  { title: "Cypriot", value: "Cypriot" },
  { title: "Czech", value: "Czech" },
  { title: "Danish", value: "Danish" },
  { title: "Djibouti", value: "Djibouti" },
  { title: "Dominican", value: "Dominican" },
  { title: "Dutch", value: "Dutch" },
  { title: "East timorese", value: "East timorese" },
  { title: "Ecuadorean", value: "Ecuadorean" },
  { title: "Egyptian", value: "Egyptian" },
  { title: "Emirian", value: "Emirian" },
  { title: "Equatorial guinean", value: "Equatorial guinean" },
  { title: "Eritrean", value: "Eritrean" },
  { title: "Estonian", value: "Estonian" },
  { title: "Ethiopian", value: "Ethiopian" },
  { title: "Fijian", value: "Fijian" },
  { title: "Filipino", value: "Filipino" },
  { title: "Finnish", value: "Finnish" },
  { title: "French", value: "French" },
  { title: "Gabonese", value: "Gabonese" },
  { title: "Gambian", value: "Gambian" },
  { title: "Georgian", value: "Georgian" },
  { title: "German", value: "German" },
  { title: "Ghanaian", value: "Ghanaian" },
  { title: "Greek", value: "Greek" },
  { title: "Grenadian", value: "Grenadian" },
  { title: "Guatemalan", value: "Guatemalan" },
  { title: "Guinea-bissauan", value: "Guinea-bissauan" },
  { title: "Guinean", value: "Guinean" },
  { title: "Guyanese", value: "Guyanese" },
  { title: "Haitian", value: "Haitian" },
  { title: "Herzegovinian", value: "Herzegovinian" },
  { title: "Honduran", value: "Honduran" },
  { title: "Hungarian", value: "Hungarian" },
  { title: "Icelander", value: "Icelander" },
  { title: "Indian", value: "Indian" },
  { title: "Indonesian", value: "Indonesian" },
  { title: "Iranian", value: "Iranian" },
  { title: "Iraqi", value: "Iraqi" },
  { title: "Irish", value: "Irish" },
  { title: "Israeli", value: "Israeli" },
  { title: "Italian", value: "Italian" },
  { title: "Ivorian", value: "Ivorian" },
  { title: "Jamaican", value: "Jamaican" },
  { title: "Japanese", value: "Japanese" },
  { title: "Jordanian", value: "Jordanian" },
  { title: "Kazakhstani", value: "Kazakhstani" },
  { title: "Kenyan", value: "Kenyan" },
  { title: "Kittian and nevisian", value: "Kittian and nevisian" },
  { title: "Kuwaiti", value: "Kuwaiti" },
  { title: "Kyrgyz", value: "Kyrgyz" },
  { title: "Laotian", value: "Laotian" },
  { title: "Latvian", value: "Latvian" },
  { title: "Lebanese", value: "Lebanese" },
  { title: "Liberian", value: "Liberian" },
  { title: "Libyan", value: "Libyan" },
  { title: "Liechtensteiner", value: "Liechtensteiner" },
  { title: "Lithuanian", value: "Lithuanian" },
  { title: "Luxembourger", value: "Luxembourger" },
  { title: "Macedonian", value: "Macedonian" },
  { title: "Malagasy", value: "Malagasy" },
  { title: "Malawian", value: "Malawian" },
  { title: "Malaysian", value: "Malaysian" },
  { title: "Maldivan", value: "Maldivan" },
  { title: "Malian", value: "Malian" },
  { title: "Maltese", value: "Maltese" },
  { title: "Marshallese", value: "Marshallese" },
  { title: "Mauritanian", value: "Mauritanian" },
  { title: "Mauritian", value: "Mauritian" },
  { title: "Mexican", value: "Mexican" },
  { title: "Micronesian", value: "Micronesian" },
  { title: "Moldovan", value: "Moldovan" },
  { title: "Monacan", value: "Monacan" },
  { title: "Mongolian", value: "Mongolian" },
  { title: "Moroccan", value: "Moroccan" },
  { title: "Mosotho", value: "Mosotho" },
  { title: "Motswana", value: "Motswana" },
  { title: "Mozambican", value: "Mozambican" },
  { title: "Namibian", value: "Namibian" },
  { title: "Nauruan", value: "Nauruan" },
  { title: "Nepalese", value: "Nepalese" },
  { title: "New zealander", value: "New zealander" },
  { title: "Ni-vanuatu", value: "Ni-vanuatu" },
  { title: "Nicaraguan", value: "Nicaraguan" },
  { title: "Nigerien", value: "Nigerien" },
  { title: "North korean", value: "North korean" },
  { title: "Northern irish", value: "Northern irish" },
  { title: "Norwegian", value: "Norwegian" },
  { title: "Omani", value: "Omani" },
  { title: "Pakistani", value: "Pakistani" },
  { title: "Palauan", value: "Palauan" },
  { title: "Panamanian", value: "Panamanian" },
  { title: "Papua new guinean", value: "Papua new guinean" },
  { title: "Paraguayan", value: "Paraguayan" },
  { title: "Peruvian", value: "Peruvian" },
  { title: "Polish", value: "Polish" },
  { title: "Portuguese", value: "Portuguese" },
  { title: "Qatari", value: "Qatari" },
  { title: "Romanian", value: "Romanian" },
  { title: "Russian", value: "Russian" },
  { title: "Rwandan", value: "Rwandan" },
  { title: "Saint lucian", value: "Saint lucian" },
  { title: "Salvadoran", value: "Salvadoran" },
  { title: "Samoan", value: "Samoan" },
  { title: "San marinese", value: "San marinese" },
  { title: "Sao tomean", value: "Sao tomean" },
  { title: "Saudi", value: "Saudi" },
  { title: "Scottish", value: "Scottish" },
  { title: "Senegalese", value: "Senegalese" },
  { title: "Serbian", value: "Serbian" },
  { title: "Seychellois", value: "Seychellois" },
  { title: "Sierra leonean", value: "Sierra leonean" },
  { title: "Singaporean", value: "Singaporean" },
  { title: "Slovakian", value: "Slovakian" },
  { title: "Slovenian", value: "Slovenian" },
  { title: "Solomon islander", value: "Solomon islander" },
  { title: "Somali", value: "Somali" },
  { title: "South african", value: "South african" },
  { title: "South korean", value: "South korean" },
  { title: "Spanish", value: "Spanish" },
  { title: "Sri lankan", value: "Sri lankan" },
  { title: "Sudanese", value: "Sudanese" },
  { title: "Surinamer", value: "Surinamer" },
  { title: "Swazi", value: "Swazi" },
  { title: "Swedish", value: "Swedish" },
  { title: "Swiss", value: "Swiss" },
  { title: "Syrian", value: "Syrian" },
  { title: "Taiwanese", value: "Taiwanese" },
  { title: "Tajik", value: "Tajik" },
  { title: "Tanzanian", value: "Tanzanian" },
  { title: "Thai", value: "Thai" },
  { title: "Togolese", value: "Togolese" },
  { title: "Tongan", value: "Tongan" },
  { title: "Trinidadian or tobagonian", value: "Trinidadian or tobagonian" },
  { title: "Tunisian", value: "Tunisian" },
  { title: "Turkish", value: "Turkish" },
  { title: "Tuvaluan", value: "Tuvaluan" },
  { title: "Ugandan", value: "Ugandan" },
  { title: "Ukrainian", value: "Ukrainian" },
  { title: "Uruguayan", value: "Uruguayan" },
  { title: "Uzbekistani", value: "Uzbekistani" },
  { title: "Venezuelan", value: "Venezuelan" },
  { title: "Vietnamese", value: "Vietnamese" },
  { title: "Welsh", value: "Welsh" },
  { title: "Yemenite", value: "Yemenite" },
  { title: "Zambian", value: "Zambian" },
  { title: "Zimbabwean", value: "Zimbabwean" },
];
const country = [
  { title: "Afghanistan", value: "Afghanistan" },
  { title: "Åland Islands", value: "Åland Islands" },
  { title: "Albania", value: "Albania" },
  { title: "Algeria", value: "Algeria" },
  { title: "American Samoa", value: "American Samoa" },
  { title: "Andorra", value: "Andorra" },
  { title: "Angola", value: "Angola" },
  { title: "Anguilla", value: "Anguilla" },
  { title: "Antarctica", value: "Antarctica" },
  { title: "Antigua and Barbuda", value: "Antigua and Barbuda" },
  { title: "Argentina", value: "Argentina" },
  { title: "Armenia", value: "Armenia" },
  { title: "Aruba", value: "Aruba" },
  { title: "Australia", value: "Australia" },
  { title: "Austria", value: "Austria" },
  { title: "Azerbaijan", value: "Azerbaijan" },
  { title: "Bahamas", value: "Bahamas" },
  { title: "Bahrain", value: "Bahrain" },
  { title: "Bangladesh", value: "Bangladesh" },
  { title: "Barbados", value: "Barbados" },
  { title: "Belarus", value: "Belarus" },
  { title: "Belgium", value: "Belgium" },
  { title: "Belize", value: "Belize" },
  { title: "Benin", value: "Benin" },
  { title: "Bermuda", value: "Bermuda" },
  { title: "Bhutan", value: "Bhutan" },
  {
    title: "Bolivia, Plurinational State of",
    value: "Bolivia, Plurinational State of",
  },
  {
    title: "Bonaire, Sint Eustatius and Saba",
    value: "Bonaire, Sint Eustatius and Saba",
  },
  { title: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { title: "Botswana", value: "Botswana" },
  { title: "Bouvet Island", value: "Bouvet Island" },
  { title: "Brazil", value: "Brazil" },
  {
    title: "British Indian Ocean Territory",
    value: "British Indian Ocean Territory",
  },
  { title: "Brunei Darussalam", value: "Brunei Darussalam" },
  { title: "Bulgaria", value: "Bulgaria" },
  { title: "Burkina Faso", value: "Burkina Faso" },
  { title: "Burundi", value: "Burundi" },
  { title: "Cambodia", value: "Cambodia" },
  { title: "Cameroon", value: "Cameroon" },
  { title: "Canada", value: "Canada" },
  { title: "Cape Verde", value: "Cape Verde" },
  { title: "Cayman Islands", value: "Cayman Islands" },
  { title: "Central African Republic", value: "Central African Republic" },
  { title: "Chad", value: "Chad" },
  { title: "Chile", value: "Chile" },
  { title: "China", value: "China" },
  { title: "Christmas Island", value: "Christmas Island" },
  { title: "Cocos (Keeling) Islands", value: "Cocos (Keeling) Islands" },
  { title: "Colombia", value: "Colombia" },
  { title: "Comoros", value: "Comoros" },
  { title: "Congo", value: "Congo" },
  {
    title: "Congo, the Democratic Republic of the",
    value: "Congo, the Democratic Republic of the",
  },
  { title: "Cook Islands", value: "Cook Islands" },
  { title: "Costa Rica", value: "Costa Rica" },
  { title: "Côte d'Ivoire", value: "Côte d'Ivoire" },
  { title: "Croatia", value: "Croatia" },
  { title: "Cuba", value: "Cuba" },
  { title: "Curaçao", value: "Curaçao" },
  { title: "Cyprus", value: "Cyprus" },
  { title: "Czech Republic", value: "Czech Republic" },
  { title: "Denmark", value: "Denmark" },
  { title: "Djibouti", value: "Djibouti" },
  { title: "Dominica", value: "Dominica" },
  { title: "Dominican Republic", value: "Dominican Republic" },
  { title: "Ecuador", value: "Ecuador" },
  { title: "Egypt", value: "Egypt" },
  { title: "El Salvador", value: "El Salvador" },
  { title: "Equatorial Guinea", value: "Equatorial Guinea" },
  { title: "Eritrea", value: "Eritrea" },
  { title: "Estonia", value: "Estonia" },
  { title: "Ethiopia", value: "Ethiopia" },
  {
    title: "Falkland Islands (Malvinas)",
    value: "Falkland Islands (Malvinas)",
  },
  { title: "Faroe Islands", value: "Faroe Islands" },
  { title: "Fiji", value: "Fiji" },
  { title: "Finland", value: "Finland" },
  { title: "France", value: "France" },
  { title: "French Guiana", value: "French Guiana" },
  { title: "French Polynesia", value: "French Polynesia" },
  {
    title: "French Southern Territories",
    value: "French Southern Territories",
  },
  { title: "Gabon", value: "Gabon" },
  { title: "Gambia", value: "Gambia" },
  { title: "Georgia", value: "Georgia" },
  { title: "Germany", value: "Germany" },
  { title: "Ghana", value: "Ghana" },
  { title: "Gibraltar", value: "Gibraltar" },
  { title: "Greece", value: "Greece" },
  { title: "Greenland", value: "Greenland" },
  { title: "Grenada", value: "Grenada" },
  { title: "Guadeloupe", value: "Guadeloupe" },
  { title: "Guam", value: "Guam" },
  { title: "Guatemala", value: "Guatemala" },
  { title: "Guernsey", value: "Guernsey" },
  { title: "Guinea", value: "Guinea" },
  { title: "Guinea-Bissau", value: "Guinea-Bissau" },
  { title: "Guyana", value: "Guyana" },
  { title: "Haiti", value: "Haiti" },
  {
    title: "Heard Island and McDonald Islands",
    value: "Heard Island and McDonald Islands",
  },
  {
    title: "Holy See (Vatican City State)",
    value: "Holy See (Vatican City State)",
  },
  { title: "Honduras", value: "Honduras" },
  { title: "Hong Kong", value: "Hong Kong" },
  { title: "Hungary", value: "Hungary" },
  { title: "Iceland", value: "Iceland" },
  { title: "India", value: "India" },
  { title: "Indonesia", value: "Indonesia" },
  { title: "Iran, Islamic Republic of", value: "Iran, Islamic Republic of" },
  { title: "Iraq", value: "Iraq" },
  { title: "Ireland", value: "Ireland" },
  { title: "Isle of Man", value: "Isle of Man" },
  { title: "Israel", value: "Israel" },
  { title: "Italy", value: "Italy" },
  { title: "Jamaica", value: "Jamaica" },
  { title: "Japan", value: "Japan" },
  { title: "Jersey", value: "Jersey" },
  { title: "Jordan", value: "Jordan" },
  { title: "Kazakhstan", value: "Kazakhstan" },
  { title: "Kenya", value: "Kenya" },
  { title: "Kiribati", value: "Kiribati" },
  {
    title: "Korea, Democratic People's Republic of",
    value: "Korea, Democratic People's Republic of",
  },
  { title: "Korea, Republic of", value: "Korea, Republic of" },
  { title: "Kuwait", value: "Kuwait" },
  { title: "Kyrgyzstan", value: "Kyrgyzstan" },
  {
    title: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
  },
  { title: "Latvia", value: "Latvia" },
  { title: "Lebanon", value: "Lebanon" },
  { title: "Lesotho", value: "Lesotho" },
  { title: "Liberia", value: "Liberia" },
  { title: "Libya", value: "Libya" },
  { title: "Liechtenstein", value: "Liechtenstein" },
  { title: "Lithuania", value: "Lithuania" },
  { title: "Luxembourg", value: "Luxembourg" },
  { title: "Macao", value: "Macao" },
  {
    title: "Macedonia, the former Yugoslav Republic of",
    value: "Macedonia, the former Yugoslav Republic of",
  },
  { title: "Madagascar", value: "Madagascar" },
  { title: "Malawi", value: "Malawi" },
  { title: "Malaysia", value: "Malaysia" },
  { title: "Maldives", value: "Maldives" },
  { title: "Mali", value: "Mali" },
  { title: "Malta", value: "Malta" },
  { title: "Marshall Islands", value: "Marshall Islands" },
  { title: "Martinique", value: "Martinique" },
  { title: "Mauritania", value: "Mauritania" },
  { title: "Mauritius", value: "Mauritius" },
  { title: "Mayotte", value: "Mayotte" },
  { title: "Mexico", value: "Mexico" },
  {
    title: "Micronesia, Federated States of",
    value: "Micronesia, Federated States of",
  },
  { title: "Moldova, Republic of", value: "Moldova, Republic of" },
  { title: "Monaco", value: "Monaco" },
  { title: "Mongolia", value: "Mongolia" },
  { title: "Montenegro", value: "Montenegro" },
  { title: "Montserrat", value: "Montserrat" },
  { title: "Morocco", value: "Morocco" },
  { title: "Mozambique", value: "Mozambique" },
  { title: "Myanmar", value: "Myanmar" },
  { title: "Namibia", value: "Namibia" },
  { title: "Nauru", value: "Nauru" },
  { title: "Nepal", value: "Nepal" },
  { title: "Netherlands", value: "Netherlands" },
  { title: "New Caledonia", value: "New Caledonia" },
  { title: "New Zealand", value: "New Zealand" },
  { title: "Nicaragua", value: "Nicaragua" },
  { title: "Niger", value: "Niger" },
  { title: "Nigeria", value: "Nigeria" },
  { title: "Niue", value: "Niue" },
  { title: "Norfolk Island", value: "Norfolk Island" },
  { title: "Northern Mariana Islands", value: "Northern Mariana Islands" },
  { title: "Norway", value: "Norway" },
  { title: "Oman", value: "Oman" },
  { title: "Pakistan", value: "Pakistan" },
  { title: "Palau", value: "Palau" },
  {
    title: "Palestinian Territory, Occupied",
    value: "Palestinian Territory, Occupied",
  },
  { title: "Panama", value: "Panama" },
  { title: "Papua New Guinea", value: "Papua New Guinea" },
  { title: "Paraguay", value: "Paraguay" },
  { title: "Peru", value: "Peru" },
  { title: "Philippines", value: "Philippines" },
  { title: "Pitcairn", value: "Pitcairn" },
  { title: "Poland", value: "Poland" },
  { title: "Portugal", value: "Portugal" },
  { title: "Puerto Rico", value: "Puerto Rico" },
  { title: "Qatar", value: "Qatar" },
  { title: "Réunion", value: "Réunion" },
  { title: "Romania", value: "Romania" },
  { title: "Russian Federation", value: "Russian Federation" },
  { title: "Rwanda", value: "Rwanda" },
  { title: "Saint Barthélemy", value: "Saint Barthélemy" },
  {
    title: "Saint Helena, Ascension and Tristan da Cunha",
    value: "Saint Helena, Ascension and Tristan da Cunha",
  },
  { title: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
  { title: "Saint Lucia", value: "Saint Lucia" },
  { title: "Saint Martin (French part)", value: "Saint Martin (French part)" },
  { title: "Saint Pierre and Miquelon", value: "Saint Pierre and Miquelon" },
  {
    title: "Saint Vincent and the Grenadines",
    value: "Saint Vincent and the Grenadines",
  },
  { title: "Samoa", value: "Samoa" },
  { title: "San Marino", value: "San Marino" },
  { title: "Sao Tome and Principe", value: "Sao Tome and Principe" },
  { title: "Saudi Arabia", value: "Saudi Arabia" },
  { title: "Senegal", value: "Senegal" },
  { title: "Serbia", value: "Serbia" },
  { title: "Seychelles", value: "Seychelles" },
  { title: "Sierra Leone", value: "Sierra Leone" },
  { title: "Singapore", value: "Singapore" },
  { title: "Sint Maarten (Dutch part)", value: "Sint Maarten (Dutch part)" },
  { title: "Slovakia", value: "Slovakia" },
  { title: "Slovenia", value: "Slovenia" },
  { title: "Solomon Islands", value: "Solomon Islands" },
  { title: "Somalia", value: "Somalia" },
  { title: "South Africa", value: "South Africa" },
  {
    title: "South Georgia and the South Sandwich Islands",
    value: "South Georgia and the South Sandwich Islands",
  },
  { title: "South Sudan", value: "South Sudan" },
  { title: "Spain", value: "Spain" },
  { title: "Sri Lanka", value: "Sri Lanka" },
  { title: "Sudan", value: "Sudan" },
  { title: "Suriname", value: "Suriname" },
  { title: "Svalbard and Jan Mayen", value: "Svalbard and Jan Mayen" },
  { title: "Swaziland", value: "Swaziland" },
  { title: "Sweden", value: "Sweden" },
  { title: "Switzerland", value: "Switzerland" },
  { title: "Syrian Arab Republic", value: "Syrian Arab Republic" },
  { title: "Taiwan, Province of China", value: "Taiwan, Province of China" },
  { title: "Tajikistan", value: "Tajikistan" },
  {
    title: "Tanzania, United Republic of",
    value: "Tanzania, United Republic of",
  },
  { title: "Thailand", value: "Thailand" },
  { title: "Timor-Leste", value: "Timor-Leste" },
  { title: "Togo", value: "Togo" },
  { title: "Tokelau", value: "Tokelau" },
  { title: "Tonga", value: "Tonga" },
  { title: "Trinidad and Tobago", value: "Trinidad and Tobago" },
  { title: "Tunisia", value: "Tunisia" },
  { title: "Turkey", value: "Turkey" },
  { title: "Turkmenistan", value: "Turkmenistan" },
  { title: "Turks and Caicos Islands", value: "Turks and Caicos Islands" },
  { title: "Tuvalu", value: "Tuvalu" },
  { title: "Uganda", value: "Uganda" },
  { title: "Ukraine", value: "Ukraine" },
  { title: "United Arab Emirates", value: "United Arab Emirates" },
  { title: "United Kingdom", value: "United Kingdom" },
  { title: "United States", value: "United States" },
  {
    title: "United States Minor Outlying Islands",
    value: "United States Minor Outlying Islands",
  },
  { title: "Uruguay", value: "Uruguay" },
  { title: "Uzbekistan", value: "Uzbekistan" },
  { title: "Vanuatu", value: "Vanuatu" },
  {
    title: "Venezuela, Bolivarian Republic of",
    value: "Venezuela, Bolivarian Republic of",
  },
  { title: "Viet Nam", value: "Viet Nam" },
  { title: "Virgin Islands, British", value: "Virgin Islands, British" },
  { title: "Virgin Islands, U.S.", value: "Virgin Islands, U.S." },
  { title: "Wallis and Futuna", value: "Wallis and Futuna" },
  { title: "Western Sahara", value: "Western Sahara" },
  { title: "Yemen", value: "Yemen" },
  { title: "Zambia", value: "Zambia" },
  { title: "Zimbabwe", value: "Zimbabwe" },
];
const artAuthor = {
  name: "artAuthor",
  type: "document",
  icon: authorIcon,
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().max(255),
    },
    {
      name: "birthYear",
      type: "number",
      description: "Author birth year",
      validation: (Rule) => Rule.required().min(0).max(3000),
    },
    {
      name: "deathYear",
      type: "number",
      description: "Author death year",
    },
    {
      name: "nationality",
      type: "string",
      validation: (Rule) => Rule.required().max(255),
      options: {
        list: nationality,
      },
    },
    {
      name: "countryOfBirth",
      type: "string",
      options: {
        list: country,
      },
    },
  ],
};

const categories = [
  { title: "Carving", value: "Carving" },
  { title: "Sculpture", value: "Sculpture" },
  { title: "Mural", value: "Mural" },
  { title: "Mosaic", value: "Mosaic" },
];

const authorField = () => ({
  name: "authors",
  type: "array",
  of: [{ type: "reference", to: [{ type: "artAuthor" }] }],
  validation: (Rule) => Rule.required().max(2).unique(),
});

const art = {
  name: "art",
  type: "document",
  icon: artIcon,
  fields: [
    titleAndSlugField(),
    imageField("poster"),
    selectField("category", categories),
    authorField(),
    locationField(),
    textField(),
    simpleRichtextField(),
    imageGalleryField(),
    seoField(),
  ],
  preview: {
    select: {
      title: "titleAndSlug.title",
      subtitle: "category",
      media: "poster",
    },
  },
};

const artLP = {
  name: "artLP",
  type: "document",
  icon: MdPages,
  preview: {
    prepare() {
      return { title: "Art LP" };
    },
  },
  fields: [featuredEventsField(), seoField()],
};
export { artAuthor, art, artLP };