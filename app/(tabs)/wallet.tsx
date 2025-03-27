import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowUpRight, ArrowDownLeft, Plus, CreditCard } from 'lucide-react-native';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wallet</Text>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>$2,458.00</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Plus size={24} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <CreditCard size={24} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          {[
            { type: 'win', amount: 500, game: 'FIFA 24 Tournament', time: '2h ago' },
            { type: 'deposit', amount: 1000, method: 'Credit Card', time: '1d ago' },
            { type: 'loss', amount: 200, game: 'Call of Duty Match', time: '2d ago' },
            { type: 'withdraw', amount: 800, method: 'Bank Transfer', time: '3d ago' },
          ].map((transaction, index) => (
            <View key={index} style={styles.transactionCard}>
              <View style={styles.transactionIcon}>
                {transaction.type === 'win' || transaction.type === 'deposit' ? (
                  <ArrowUpRight size={24} color="#10B981" />
                ) : (
                  <ArrowDownLeft size={24} color="#EF4444" />
                )}
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>
                  {transaction.type === 'win'
                    ? 'Won Match'
                    : transaction.type === 'loss'
                    ? 'Lost Match'
                    : transaction.type === 'deposit'
                    ? 'Added Money'
                    : 'Withdrew Money'}
                </Text>
                <Text style={styles.transactionSubtitle}>
                  {transaction.game || transaction.method}
                </Text>
              </View>
              <View style={styles.transactionAmount}>
                <Text
                  style={[
                    styles.amountText,
                    {
                      color:
                        transaction.type === 'win' || transaction.type === 'deposit'
                          ? '#10B981'
                          : '#EF4444',
                    },
                  ]}>
                  {transaction.type === 'win' || transaction.type === 'deposit' ? '+' : '-'}$
                  {transaction.amount}
                </Text>
                <Text style={styles.timeText}>{transaction.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <TouchableOpacity style={styles.paymentMethodCard}>
            <View style={styles.cardInfo}>
              <CreditCard size={24} color="#60A5FA" />
              <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>•••• •••• •••• 4242</Text>
                <Text style={styles.cardSubtitle}>Expires 12/25</Text>
              </View>
            </View>
            <Text style={styles.defaultBadge}>Default</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addPaymentButton}>
            <Plus size={20} color="#60A5FA" />
            <Text style={styles.addPaymentText}>Add New Payment Method</Text>
          </TouchableOpacity>
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
  balanceCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
  },
  balanceLabel: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'Inter_700Bold',
    marginTop: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 12,
    marginHorizontal: 6,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 8,
  },
  content: {
    flex: 1,
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
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  transactionSubtitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
  timeText: {
    color: '#94A3B8',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDetails: {
    marginLeft: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  cardSubtitle: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  defaultBadge: {
    color: '#60A5FA',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  addPaymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#334155',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  addPaymentText: {
    color: '#60A5FA',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 8,
  },
});