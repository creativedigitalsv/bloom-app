import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';

interface Message { role: 'user' | 'assistant'; content: string; }

export default function AIChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hej! Jag är Bloom AI 🌸 Jag finns här för att svara på dina frågor om graviditeten. Hur kan jag hjälpa dig idag?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Något gick fel. Försök igen! 🌸' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Text style={styles.title}>Bloom AI 🌸</Text>
        <Text style={styles.subtitle}>Din graviditetsassistent</Text>
      </View>
      <ScrollView style={styles.messages} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, i) => (
          <View key={i} style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={[styles.bubbleText, msg.role === 'user' ? styles.userText : styles.aiText]}>
              {msg.content}
            </Text>
          </View>
        ))}
        {loading && <Text style={styles.typing}>Bloom skriver... 🌸</Text>}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Skriv din fråga..."
          placeholderTextColor="#ccc"
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#FCE4EC' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#C2185B' },
  subtitle: { fontSize: 13, color: '#AD1457', opacity: 0.7 },
  messages: { flex: 1, padding: 16 },
  bubble: { maxWidth: '80%', borderRadius: 18, padding: 14, marginBottom: 10 },
  userBubble: { backgroundColor: '#C2185B', alignSelf: 'flex-end' },
  aiBubble: { backgroundColor: '#fff', alignSelf: 'flex-start', shadowColor: '#E91E8C', shadowOpacity: 0.1, shadowRadius: 8, shadowOffset: {width:0, height:2} },
  bubbleText: { fontSize: 15, lineHeight: 21 },
  userText: { color: '#fff' },
  aiText: { color: '#444' },
  typing: { color: '#C2185B', fontStyle: 'italic', marginLeft: 8 },
  inputRow: { flexDirection: 'row', padding: 16, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#FCE4EC' },
  input: { flex: 1, backgroundColor: '#FFF0F5', borderRadius: 25, paddingHorizontal: 18, paddingVertical: 12, fontSize: 15, color: '#333' },
  sendBtn: { backgroundColor: '#C2185B', borderRadius: 25, width: 48, height: 48, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  sendText: { color: '#fff', fontSize: 18 },
});
