import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Search, Filter, Trophy, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function AdminMatches() {
  const matches = [
    {
      id: 1,
      game: 'FIFA 24',
      type: 'Tournament',
      players: ['Alex K.', 'Mike R.', 'John D.', 'Sarah M.'],
      totalPrize: 2000,
      fees: 200,
      status: 'in_progress',
      startTime: '2024-02-20T15:00:00Z',
    },
    {
      id: 2,
      game: 'Call of Duty',
      type: '1v1',
      players: ['Chris P.', 'David L.'],
      totalPrize: 500,
      fees: 50,
      status: 'pending_verification',
      startTime: '2024-02-20T16:30:00Z',
    },
    // Add more matches as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Match Management</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#94A3B8" />
            <Text style={styles.searchPlaceholder}>Search matches...</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>148</Text>
            <Text style={styles.statLabel}>Active Matches</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Pending Verification</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>$1,847</Text>
            <Text style={styles.statLabel}>Fees Today</Text>
          </View>
        </View>

        <View style={styles.matchesList}>
          {matches.map((match) => (
            <TouchableOpacity key={match.id} style={styles.matchCard}>
              <View style={styles.matchHeader}>
                <View>
                  <Text style={styles.matchGame}>{match.game}</Text>
                  <Text style={styles.matchType}>{match.type}</Text>
                </View>
                <View style={[
                  styles.matchStatus,
                  {
                    backgroundColor: match.status === 'in_progress' ? '#60A5FA' : '#F59E0B'
                  }
                ]}>
                  <Text style={styles.matchStatusText}>
                    {match.status === 'in_progress' ? 'In Progress' : 'Pending Verification'}
                  </Text>
                </View>
              </View>

              <View style={styles.matchContent}>
                <View style={styles.matchSection}>
                  <Text style={styles.sectionTitle}>Players</Text>
                  <View style={styles.playersList}>
                    {match.players.map((player, index) => (
                      <Text key={index} style={styles.playerName}>{player}</Text>
                    ))}
                  </View>
                </View>

                <View style={styles.matchSection}>
                  <Text style={styles.sectionTitle}>Prize & Fees</Text>
                  <View style={styles.financialDetails}>
                    <View style={styles.financialItem}>
                      <Text style={styles.financialLabel}>Total Prize</Text>
                      <Text style={styles.financialValue}>${match.totalPrize}</Text>
                    </View>
                    <View style={styles.financialItem}>
                      <Text style={styles.financialLabel}>Platform Fees (5%)</Text>
                      <Text style={styles.financialValue}>${match.fees}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.matchActions}>
                  {match.status === 'pending_verification' ? (
                    <>
                      <TouchableOpacity style={styles.actionButton}>
                        <Trophy size={20} color="#FFFFFF" />
                        <Text style={styles.actionButtonText}>Verify Winner</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.actionButton, styles.disputeButton]}>
                        <AlertCircle size={20} color="#FFFFFF" />
                        <Text style={styles.actionButtonText}>Handle Dispute</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity style={styles.actionButton}>
                      <Text style={styles.actionButtonText}>View Details</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  searchContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 12,
  },
  searchPlaceholder: {
    color: '#94A3B8',
    marginLeft: 12,
    fontFamily: 'Inter_400Regular',
  },
  filterButton: {
    backgroundColor: '#2563EB',
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  statsRow: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
    textAlign: 'center',
  },
  matchesList: {
    padding: 20,
  },
  matchCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#334155',
  },
  matchGame: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  matchType: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  matchStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  matchStatusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  matchContent: {
    padding: 16,
  },
  matchSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 8,
  },
  playersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  playerName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    backgroundColor: '#334155',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  financialDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  financialItem: {
    flex: 1,
  },
  financialLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
  financialValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    marginTop: 2,
  },
  matchActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  disputeButton: {
    backgroundColor: '#DC2626',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
});