import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Search, ArrowUpRight, CircleCheck as CheckCircle2, Clock, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function AdminPayouts() {
  const payouts = [
    {
      id: 1,
      player: 'Alex K.',
      amount: 950,
      matchId: 'M-12345',
      game: 'FIFA 24',
      status: 'pending',
      timestamp: '2024-02-20T14:30:00Z',
    },
    {
      id: 2,
      player: 'Sarah M.',
      amount: 1425,
      matchId: 'M-12346',
      game: 'Call of Duty',
      status: 'processing',
      timestamp: '2024-02-20T15:00:00Z',
    },
    {
      id: 3,
      player: 'Mike R.',
      amount: 475,
      matchId: 'M-12347',
      game: 'NBA 2K24',
      status: 'completed',
      timestamp: '2024-02-20T15:30:00Z',
    },
    // Add more payouts as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payout Management</Text>
        <View style={styles.searchBar}>
          <Search size={20} color="#94A3B8" />
          <Text style={styles.searchPlaceholder}>Search payouts...</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.summaryCards}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryTitle}>Today's Payouts</Text>
              <ArrowUpRight size={20} color="#10B981" />
            </View>
            <Text style={styles.summaryAmount}>$12,847.00</Text>
            <View style={styles.summaryFooter}>
              <Text style={styles.summaryLabel}>28 transactions</Text>
            </View>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryTitle}>Pending Approvals</Text>
              <Clock size={20} color="#F59E0B" />
            </View>
            <Text style={styles.summaryAmount}>$5,280.00</Text>
            <View style={styles.summaryFooter}>
              <Text style={styles.summaryLabel}>12 pending</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Payouts</Text>
          
          {payouts.map((payout) => (
            <View key={payout.id} style={styles.payoutCard}>
              <View style={styles.payoutHeader}>
                <View style={styles.payoutInfo}>
                  <Text style={styles.payoutPlayer}>{payout.player}</Text>
                  <Text style={styles.payoutGame}>{payout.game} • {payout.matchId}</Text>
                </View>
                <View style={[
                  styles.payoutStatus,
                  {
                    backgroundColor:
                      payout.status === 'completed' ? '#059669' :
                      payout.status === 'processing' ? '#2563EB' : '#D97706',
                  }
                ]}>
                  <Text style={styles.payoutStatusText}>
                    {payout.status === 'completed' ? 'Completed' :
                     payout.status === 'processing' ? 'Processing' : 'Pending'}
                  </Text>
                </View>
              </View>

              <View style={styles.payoutDetails}>
                <View style={styles.payoutAmount}>
                  <Text style={styles.payoutAmountLabel}>Amount</Text>
                  <Text style={styles.payoutAmountValue}>${payout.amount.toFixed(2)}</Text>
                </View>

                <View style={styles.payoutActions}>
                  {payout.status === 'pending' && (
                    <>
                      <TouchableOpacity style={styles.approveButton}>
                        <CheckCircle2 size={20} color="#FFFFFF" />
                        <Text style={styles.actionButtonText}>Approve</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.reviewButton}>
                        <AlertCircle size={20} color="#FFFFFF" />
                        <Text style={styles.actionButtonText}>Review</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {payout.status === 'processing' && (
                    <TouchableOpacity style={styles.trackButton}>
                      <Text style={styles.actionButtonText}>Track Progress</Text>
                    </TouchableOpacity>
                  )}
                  {payout.status === 'completed' && (
                    <TouchableOpacity style={styles.viewButton}>
                      <Text style={styles.actionButtonText}>View Details</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
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
  content: {
    flex: 1,
  },
  summaryCards: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryTitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  summaryAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginTop: 8,
  },
  summaryFooter: {
    marginTop: 8,
  },
  summaryLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
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
  payoutCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  payoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#334155',
  },
  payoutInfo: {
    flex: 1,
  },
  payoutPlayer: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  payoutGame: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  payoutStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  
  },
  payoutStatusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  payoutDetails: {
    padding: 16,
  },
  payoutAmount: {
    marginBottom: 12,
  },
  payoutAmountLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
  payoutAmountValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    marginTop: 2,
  },
  payoutActions: {
    flexDirection: 'row',
    gap: 12,
  },
  approveButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#059669',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  reviewButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D97706',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  trackButton: {
    flex: 1,
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#334155',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
});