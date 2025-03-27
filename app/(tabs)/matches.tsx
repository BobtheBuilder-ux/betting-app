import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Search, Filter } from 'lucide-react-native';

export default function MatchesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Matches</Text>
        <View style={styles.searchBar}>
          <Search size={20} color="#94A3B8" />
          <Text style={styles.searchPlaceholder}>Search matches...</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#94A3B8" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.matchList}>
        {[1, 2, 3, 4, 5].map((match) => (
          <TouchableOpacity key={match} style={styles.matchCard}>
            <View style={styles.matchHeader}>
              <Text style={styles.gameTitle}>FIFA 24</Text>
              <View style={styles.prizeContainer}>
                <Text style={styles.prizeAmount}>$500</Text>
                <Text style={styles.prizeLabel}>Prize Pool</Text>
              </View>
            </View>

            <View style={styles.players}>
              <View style={styles.player}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }}
                  style={styles.playerAvatar}
                />
                <Text style={styles.playerName}>Player 1</Text>
                <Text style={styles.playerRating}>Rating: 2100</Text>
              </View>

              <View style={styles.vsContainer}>
                <Text style={styles.vsText}>VS</Text>
              </View>

              <View style={styles.player}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100' }}
                  style={styles.playerAvatar}
                />
                <Text style={styles.playerName}>Player 2</Text>
                <Text style={styles.playerRating}>Rating: 1950</Text>
              </View>
            </View>

            <View style={styles.matchFooter}>
              <Text style={styles.matchTime}>Starts in 10 minutes</Text>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Match</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 12,
  },
  searchPlaceholder: {
    color: '#94A3B8',
    marginLeft: 12,
    flex: 1,
    fontFamily: 'Inter_400Regular',
  },
  filterButton: {
    padding: 4,
  },
  matchList: {
    padding: 20,
  },
  matchCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  gameTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  prizeContainer: {
    alignItems: 'flex-end',
  },
  prizeAmount: {
    color: '#60A5FA',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  prizeLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
  players: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  player: {
    alignItems: 'center',
    flex: 1,
  },
  playerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  playerName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 4,
  },
  playerRating: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
  vsContainer: {
    width: 40,
    alignItems: 'center',
  },
  vsText: {
    color: '#60A5FA',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
  matchFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  matchTime: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  joinButton: {
    backgroundColor: '#60A5FA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
});