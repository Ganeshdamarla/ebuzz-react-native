import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';

const Support = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [showFAQ, setShowFAQ] = useState(false);
    const predefinedQuestions = [
      'What is FixnRst?',
      'How do I use FixnRst?',
      'Is FixnRst free to use?',
      'Do I need to create an account to use FixnRst?',
      'How can I provide feedback or report an issue?',
      // Add more predefined questions as needed
    ];
  
    const faqData = {
      'What is FixnRst?': 'FixnRst is an application aimed at helping users find quick solutions to everyday problems.',
      'How do I use FixnRst?': 'Simply navigate to the search bar and type your question or browse through the categories to find relevant solutions.',
      'Is FixnRst free to use?': 'Yes, FixnRst is completely free to use for all users.',
      'Do I need to create an account to use FixnRst?': 'No, you can use FixnRst without creating an account. However, creating an account allows you to save your favorite solutions and access additional features.',
      'How can I provide feedback or report an issue?': 'You can provide feedback or report an issue by navigating to the settings menu and selecting the "Feedback" option. Alternatively, you can contact our support team at support@fixnrst.com.',
      // Add more predefined questions and answers as needed
    };
  
    const handleSendMessage = () => {
      if (!inputMessage.trim()) return;
  
      setMessages([...messages, { text: inputMessage, fromUser: true }]);
      if (faqData[inputMessage]) {
        setMessages([...messages, { text: inputMessage, fromUser: false }, { text: faqData[inputMessage], fromUser: false }]);
      } else {
        setMessages([...messages, { text: "Sorry, I don't have an answer to that question. Click here to view FAQs.", fromUser: false }]);
      }
      setInputMessage('');
    };
  
    const handleFAQClick = (question) => {
      if (faqData[question]) {
        setMessages([...messages, { text: question, fromUser: false }, { text: faqData[question], fromUser: false }]);
        setShowFAQ(false);
      }
    };
  
    const toggleFAQ = () => {
      setShowFAQ(!showFAQ);
    };
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    <ScrollView contentContainerStyle={styles.messagesContainer}>
      {messages.map((message, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => message.text === "Sorry, I don't have an answer to that question. Click here to view FAQs." ? toggleFAQ() : null}
          style={[styles.messageBubble, message.fromUser ? styles.userMessage : styles.botMessage]}
        >
          <Text style={styles.messageText}>{message.text}</Text>
        </TouchableOpacity>
      ))}
      {showFAQ &&
        predefinedQuestions.map((question, index) => (
          <TouchableOpacity key={index} onPress={() => handleFAQClick(question)}>
            <View style={[styles.messageBubble, styles.botMessage]}>
              <Text style={styles.messageText}>{question}</Text>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputMessage}
        onChangeText={setInputMessage}
        placeholder="Type your question here..."
        onSubmitEditing={handleSendMessage}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Support

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: StatusBar.currentHeight || 0, // Add space for the status bar
    },
    messagesContainer: {
      flexGrow: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    messageBubble: {
      maxWidth: '80%',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#007bff',
      marginRight: 10,
    },
    botMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#28a745',
      marginLeft: 10,
    },
    messageText: {
      color: '#fff',
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: '#ccc',
    },
    textInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: '#007bff',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    sendButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });