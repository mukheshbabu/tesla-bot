from deep_translator import GoogleTranslator as translator
import streamlit as st

st.set_page_config(page_title='Simply! Translate', page_icon='tesla-removebg.png', layout='wide',
                   initial_sidebar_state='expanded')

Languages = {'bengali': 'bn', 'english': 'en', 'gujarati': 'gu', 'hindi': 'hi', 'kannada': 'kn',
             'malayalam': 'ml', 'marathi': 'mr', 'nepali': 'ne', 'odia': 'or', 'punjabi': 'pa',
             'sindhi': 'sd', 'tamil': 'ta', 'telugu': 'te', 'urdu': 'ur'}

st.title("Language Translator:book:")

col1, col2 = st.columns(2)

with col1:
    option1 = st.selectbox('Input language',
                       ('english', 'bengali', 'gujarati', 'hindi', 'kannada', 'malayalam', 'marathi', 'nepali', 'odia',
                        'punjabi', 'sindhi', 'tamil', 'telugu', 'urdu'))

    text = st.text_area("Enter text:", height=None, max_chars=None, key=None, help="Enter your text here")

with col2:
    option2 = st.selectbox('Output language',
                       ('hindi', 'english', 'bengali', 'gujarati', 'kannada', 'malayalam', 'marathi', 'nepali', 'odia',
                        'punjabi', 'sindhi', 'tamil', 'telugu', 'urdu'))

    value1 = Languages[option1]
    value2 = Languages[option2]

    button_text = 'Click to translate'

if st.button(f'{button_text} / {translator(source=value1, target=value2).translate(button_text)}'):
    with col2:
        if text == "":
            st.warning('Please **enter text** for translation')

        else:
            translate = translator(source=value1, target=value2).translate(text)
            st.text_area(label='', value=str(translate))
            # st.success("Translation is **successfully** completed!")
else:
    pass
