import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Search, UserPlus, MessageCircle } from 'lucide-react-native';

export default function SocialScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Social</Text>
        <View style={styles.searchBar}>
          <Search size={20} color="#94A3B8" />
          <Text style={styles.searchPlaceholder}>Search players...</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Online Friends</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.friendsScroll}>
            {[1, 2, 3, 4, 5].map((friend) => (
              <TouchableOpacity key={friend} style={styles.friendCard}>
                <Image
                  source={{ uri: `https://images.unsplash.com/photo-${1580489944761 + friend}-19a922e6ba6f?w=100` }}
                  style={styles.friendAvatar}
                />
                <View style={styles.onlineIndicator} />
                <Text style={styles.friendName}>Player {friend}</Text>
                <Text style={styles.friendStatus}>In Match</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Friend Requests</Text>
          {[1, 2].map((request) => (
            <View key={request} style={styles.requestCard}>
              <Image
                source={{ uri: `https://images.unsplash.com/photo-${1580489944761 + request + 5}-19a922e6ba6f?w=100` }}
                style={styles.requestAvatar}
              />
              <View style={styles.requestInfo}>
                <Text style={styles.requestName}>New Player {request}</Text>
                <Text style={styles.requestMutual}>4 mutual friends</Text>
              </View>
              <View style={styles.requestActions}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.acceptButtonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton}>
                  <Text style={styles.declineButtonText}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggested Players</Text>
          {[1, 2, 3].map((player) => (
            <TouchableOpacity key={player} style={styles.playerCard}>
              <Image
                source={{ uri: `https://images.unsplash.com/photo-${1580489944761 + player + 7}-19a922e6ba6f?w=100` }}
                style={styles.playerAvatar}
              />
              <View style={styles.playerInfo}>
                <Text style={styles.playerName}>Pro Player {player}</Text>
                <Text style={styles.playerStats}>Won 245 matches • Rating 2400</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <UserPlus size={20} color="#60A5FA" />
              </TouchableOpacity>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    marginBottom: 16,
  },
  friendsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  friendCard: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  friendAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  onlineIndicator: {
    width: 14,
    height: 14,
    backgroundColor: '#10B981',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#0F172A',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  friendName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
  },
  friendStatus: {
    color: '#60A5FA',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  requestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  requestAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  requestInfo: {
    flex: 1,
    marginLeft: 12,
  },
  requestName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  requestMutual: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  requestActions: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: '#60A5FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  declineButton: {
    backgroundColor: '#334155',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  declineButtonText: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  playerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  playerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  playerName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  playerStats: {
    color: '#94A3B8',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  addButton: {
    padding: 8,
  },
});