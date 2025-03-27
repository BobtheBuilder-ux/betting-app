import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { ArrowUpRight, Users, Trophy, Wallet } from 'lucide-react-native';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Active Players',
      value: '2,451',
      change: '+12.5%',
      icon: Users,
    },
    {
      title: 'Live Matches',
      value: '148',
      change: '+5.2%',
      icon: Trophy,
    },
    {
      title: 'Revenue Today',
      value: '$12,847',
      change: '+8.1%',
      icon: Wallet,
    },
  ];

  const recentMatches = [
    {
      id: 1,
      game: 'FIFA 24',
      players: ['Alex K.', 'Mike R.'],
      stake: 500,
      fees: 50,
      status: 'completed',
      winner: 'Alex K.',
    },
    {
      id: 2,
      game: 'Call of Duty',
      players: ['Sarah M.', 'John D.'],
      stake: 1000,
      fees: 100,
      status: 'in_progress',
    },
    {
      id: 3,
      game: 'NBA 2K24',
      players: ['Chris P.', 'David L.'],
      stake: 750,
      fees: 75,
      status: 'pending_payout',
      winner: 'Chris P.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Admin Dashboard</Text>
          <Text style={styles.subtitle}>Platform Overview</Text>
        </View>

        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <stat.icon size={24} color="#60A5FA" style={styles.statIcon} />
              <Text style={styles.statTitle}>{stat.title}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <View style={styles.statChange}>
                <ArrowUpRight size={16} color="#10B981" />
                <Text style={styles.statChangeText}>{stat.change}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Matches</Text>
            <Link href="/admin/matches" style={styles.sectionLink}>
              <Text style={styles.sectionLinkText}>View All</Text>
            </Link>
          </View>

          {recentMatches.map((match) => (
            <View key={match.id} style={styles.matchCard}>
              <View style={styles.matchHeader}>
                <Text style={styles.matchGame}>{match.game}</Text>
                <View style={[
                  styles.matchStatus,
                  {
                    backgroundColor: match.status === 'completed' ? '#10B981' :
                      match.status === 'in_progress' ? '#60A5FA' : '#F59E0B'
                  }
                ]}>
                  <Text style={styles.matchStatusText}>
                    {match.status === 'completed' ? 'Completed' :
                      match.status === 'in_progress' ? 'In Progress' : 'Pending Payout'}
                  </Text>
                </View>
              </View>

              <View style={styles.matchDetails}>
                <View style={styles.matchPlayers}>
                  <Text style={styles.matchPlayersTitle}>Players</Text>
                  {match.players.map((player, index) => (
                    <Text key={index} style={styles.matchPlayerName}>{player}</Text>
                  ))}
                </View>

                <View style={styles.matchFinancials}>
                  <View style={styles.matchFinancialItem}>
                    <Text style={styles.matchFinancialLabel}>Stake</Text>
                    <Text style={styles.matchFinancialValue}>${match.stake}</Text>
                  </View>
                  <View style={styles.matchFinancialItem}>
                    <Text style={styles.matchFinancialLabel}>Fees (5%)</Text>
                    <Text style={styles.matchFinancialValue}>${match.fees}</Text>
                  </View>
                </View>

                {match.winner && (
                  <View style={styles.matchWinner}>
                    <Trophy size={16} color="#F59E0B" />
                    <Text style={styles.matchWinnerText}>Winner: {match.winner}</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pending Payouts</Text>
            <Link href="/admin/payouts" style={styles.sectionLink}>
              <Text style={styles.sectionLinkText}>Process All</Text>
            </Link>
          </View>

          <View style={styles.payoutCard}>
            <View style={styles.payoutHeader}>
              <Text style={styles.payoutTitle}>Today's Payouts</Text>
              <Text style={styles.payoutAmount}>$5,847.00</Text>
            </View>
            <View style={styles.payoutStats}>
              <View style={styles.payoutStat}>
                <Text style={styles.payoutStatLabel}>Pending</Text>
                <Text style={styles.payoutStatValue}>12</Text>
              </View>
              <View style={styles.payoutStat}>
                <Text style={styles.payoutStatLabel}>Processing</Text>
                <Text style={styles.payoutStatValue}>5</Text>
              </View>
              <View style={styles.payoutStat}>
                <Text style={styles.payoutStatLabel}>Completed</Text>
                <Text style={styles.payoutStatValue}>28</Text>
              </View>
            </View>
          </View>
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
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  statCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
  },
  statIcon: {
    marginBottom: 12,
  },
  statTitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
  },
  statChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statChangeText: {
    color: '#10B981',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 4,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  sectionLink: {
    backgroundColor: '#334155',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  sectionLinkText: {
    color: '#60A5FA',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  matchCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  matchGame: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  matchStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  matchStatusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  matchDetails: {
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 12,
  },
  matchPlayers: {
    marginBottom: 12,
  },
  matchPlayersTitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginBottom: 4,
  },
  matchPlayerName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 2,
  },
  matchFinancials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  matchFinancialItem: {
    flex: 1,
  },
  matchFinancialLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
  matchFinancialValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    marginTop: 2,
  },
  matchWinner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#422006',
    padding: 8,
    borderRadius: 6,
  },
  matchWinnerText: {
    color: '#F59E0B',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 6,
  },
  payoutCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
  },
  payoutHeader: {
    marginBottom: 16,
  },
  payoutTitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  payoutAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
  },
  payoutStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payoutStat: {
    flex: 1,
    alignItems: 'center',
  },
  payoutStatLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
  payoutStatValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
  },
});