import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, TrendingUp, Users } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#1E293B', '#0F172A']}
          style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.username}>Alex</Text>
        </LinearGradient>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Play size={24} color="#60A5FA" />
            <Text style={styles.actionText}>Quick Match</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <TrendingUp size={24} color="#60A5FA" />
            <Text style={styles.actionText}>Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Users size={24} color="#60A5FA" />
            <Text style={styles.actionText}>Find Players</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Matches</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.matchesScroll}>
            {[1, 2, 3].map((match) => (
              <TouchableOpacity key={match} style={styles.matchCard}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' }}
                  style={styles.matchImage}
                />
                <View style={styles.matchInfo}>
                  <Text style={styles.matchTitle}>FIFA 24 Tournament</Text>
                  <Text style={styles.matchPrize}>$1,000 Prize Pool</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live Now</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.matchesScroll}>
            {[1, 2, 3].map((stream) => (
              <TouchableOpacity key={stream} style={styles.streamCard}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400' }}
                  style={styles.streamImage}
                />
                <View style={styles.streamInfo}>
                  <Text style={styles.streamTitle}>Call of Duty Match</Text>
                  <Text style={styles.streamViewers}>2.5K watching</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  welcomeText: {
    color: '#94A3B8',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  username: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#1E293B',
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: -20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: '#94A3B8',
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    marginBottom: 16,
  },
  matchesScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  matchCard: {
    width: 280,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
  },
  matchImage: {
    width: '100%',
    height: 150,
  },
  matchInfo: {
    padding: 16,
  },
  matchTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  matchPrize: {
    color: '#60A5FA',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginTop: 4,
  },
  streamCard: {
    width: 200,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
  },
  streamImage: {
    width: '100%',
    height: 120,
  },
  streamInfo: {
    padding: 12,
  },
  streamTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  streamViewers: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
});