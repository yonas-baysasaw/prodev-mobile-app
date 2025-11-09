import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  // 🔍 Search Bar Section
  searchGroup: {
    height: 130,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#1CA37B", // vibrant green header
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  searchControl: {
    fontSize: 14,
    color: "#999",
    marginTop: 2,
  },
  searchButton: {
    backgroundColor: "#FFA800",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  // 🧭 Filter Section
  filterWrapper: {
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 16,
  },
  filterContainer: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  filterLabel: {
    fontSize: 12,
    color: "#444",
    marginTop: 4,
    fontWeight: "500",
  },

  // 🏡 Property Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#F9F9F9",
  },

  // 📜 Pagination / Show More
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },
  showMoreButton: {
    backgroundColor: "#FF385C",
    borderRadius: 30,
    paddingHorizontal: 28,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
