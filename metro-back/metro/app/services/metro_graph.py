import math
from matplotlib import pyplot as plt
import networkx as nx
import json
import sys
import os


class GraphBuilder:
    
    # Загрузка входных данных
    current_dir = os.path.dirname(__file__)
    data_dir = os.path.join(current_dir, '..', 'data')
    stations_file   = os.path.join(data_dir, 'stations.json')
    transfers_file  = os.path.join(data_dir, 'transfers.json')
    inters_file     = os.path.join(data_dir, 'inters.json')

    stations_data   = json.load(open(stations_file , encoding='utf-8'))
    transfers_data  = json.load(open(transfers_file, encoding='utf-8'))
    inters_data     = json.load(open(inters_file   , encoding='utf-8'))
    
    # Создание графа станций метро
    G = nx.Graph()
    
    def __init__(self) -> None:

        # Добавление станций в граф
        for station in self.stations_data:
            self.G.add_node(station['id'], name=station['name_station'], line=station['name_line'])

        # Добавление ребер между станциями
        for inter in self.inters_data:
            self.G.add_edge(inter['id_st1'], inter['id_st2'], weight=float(inter['time'].replace(',','.')))

        # Добавление ребер для пересадок между станциями
        for transfer in self.transfers_data:
            self.G.add_edge(transfer['id1'], transfer['id2'], weight=float(transfer['time'].replace(',','.')))

    # Функция для поиска кратчайшего пути между станциями
    def shortest_path(self, start, end):
        try:
            path = nx.shortest_path(self.G, start, end, weight='weight')
            return path
        except nx.NetworkXNoPath:
            return None

    # Функция для поиска оптимальной пересадки между станциями
    def optimal_transfer(self, start, end):
        shortest_paths = []
        for node in self.G.nodes():
            if node != start and node != end:
                path1 = self.shortest_path(start, node)
                path2 = self.shortest_path(node, end)
                if path1 and path2:
                    shortest_paths.append((path1 + path2, node))
        shortest_paths.sort(key=lambda x: sum(int(y) for y in x[0][1:-1]))
        return shortest_paths[0][1]
    
    def display(self, highlight_nodes=None, highlight_color='red'):

        node_colors = ['lightblue' if node not in highlight_nodes else highlight_color for node in self.G.nodes()]
        
        # Create a dictionary that maps node IDs to their corresponding names
        labels = {node: self.G.nodes[node]['name'] for node in self.G.nodes}
        
        # Rotate the node positions
        rotation_angle = math.radians(-30)  # rotate 30 degrees
        rotated_pos = {}
        for node, (x, y) in pos.items():
            new_x = x * math.cos(rotation_angle) - y * math.sin(rotation_angle)
            new_y = x * math.sin(rotation_angle) + y * math.cos(rotation_angle)
            rotated_pos[node] = (new_x, new_y)

        pos = nx.spring_layout(self.G, k=0.005)  # force-directed layout

        nx.draw_networkx(self.G, rotated_pos, node_size=100, node_color=node_colors, edge_color='gray')
        nx.draw_networkx_labels(self.G, rotated_pos, labels=labels, font_size=8)
    
        plt.axis('off')
        plt.show()

# Тестированиеfunctions
gb = GraphBuilder()

# Get user input for origin and destination stations
# origin_station_name = input("Enter origin station: ")
# destination_station_name = input("Enter destination station: ")

origin_station_name = "БКЛ Кленовый бульвар"
destination_station_name = "Юго-Западная"

# Find the station IDs based on the user input
otpr = next(stat.get("id") for stat in gb.stations_data if stat.get("name_station") == origin_station_name)
dest = next(stat.get("id") for stat in gb.stations_data if stat.get("name_station") == destination_station_name)

shortest_path_nodes = gb.shortest_path(otpr, dest)
optimal_transfer_nodes = gb.optimal_transfer(otpr, dest)

# Calculate the shortest path and optimal transfer
print(shortest_path_nodes)     # Кратчайший путь между станциями
print(optimal_transfer_nodes)  # Оптимальная пересадка между станциями

gb.display(highlight_nodes=(shortest_path_nodes + [optimal_transfer_nodes]))