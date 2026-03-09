import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function HomeScreen() {
  const [weekData, setWeekData] = useState<any>(null);
  const [currentWeek, setCurrentWeek] = useState(12);

  useEffect(() => {
    fetchWeekContent(currentWeek);
  }, [currentWeek]);

  async function fetchWeekContent(week: number) {
    const { data } = await supabase
      .from('weekly_content')
      .select('*')
      .eq('week_number', week)
      .single();
    setWeekData(data);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Välkommen tillbaka 🌸</Text>
        <Text style={styles.weekTitle}>Vecka {currentWeek}</Text>
      </View>

      {weekData && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{weekData.title}</Text>
          <Text style={styles.cardBody}>{weekData.baby_development}</Text>

          <View style={styles.tipBox}>
            <Text style={styles.tipLabel}>💡 Veckans tips</Text>
            <Text style={styles.tipText}>{weekData.tip_of_week}</Text>
          </View>

          <View style={styles.partnerBox}>
            <Text style={styles.partnerLabel}>👫 För din partner</Text>
            <Text style={styles.partnerText}>{weekData.partner_tip}</Text>
          </View>
        </View>
      )}

      <View style={styles.weekNav}>
        <TouchableOpacity onPress={() => setCurrentWeek(w => Math.max(1, w - 1))} style={styles.navBtn}>
          <Text style={styles.navText}>← Föregående</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeek(w => Math.min(40, w + 1))} style={styles.navBtn}>
          <Text style={styles.navText}>Nästa →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5', padding: 20 },
  header: { marginBottom: 24, marginTop: 10 },
  greeting: { fontSize: 16, color: '#AD1457' },
  weekTitle: { fontSize: 32, fontWeight: 'bold', color: '#880E4F' },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 16,
    shadowColor: '#E91E8C', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12 },
  cardTitle: { fontSize: 20, fontWeight: '700', color: '#C2185B', marginBottom: 10 },
  cardBody: { fontSize: 15, color: '#555', lineHeight: 22, marginBottom: 16 },
  tipBox: { backgroundColor: '#FFF9C4', borderRadius: 12, padding: 14, marginBottom: 12 },
  tipLabel: { fontWeight: '700', color: '#F57F17', marginBottom: 4 },
  tipText: { color: '#666', fontSize: 14 },
  partnerBox: { backgroundColor: '#E8F5E9', borderRadius: 12, padding: 14 },
  partnerLabel: { fontWeight: '700', color: '#2E7D32', marginBottom: 4 },
  partnerText: { color: '#444', fontSize: 14 },
  weekNav: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  navBtn: { backgroundColor: '#FCE4EC', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 12 },
  navText: { color: '#C2185B', fontWeight: '600' },
});
