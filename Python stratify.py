# -*- coding: utf-8 -*-
"""
Created on Fri Aug 15 15:51:06 2025

@author: stratify team
"""

import pandas as pd
import matplotlib.pyplot as plt
orders = pd.read_csv("order_metadata.csv")
order_items = pd.read_csv("order_items__train.csv")
products = pd.read_csv("product_catalog.csv")
aisles = pd.read_csv("aisle_info.csv")
departments = pd.read_csv("department_info.csv")

#1
total_orders = len(orders['order_id'])          #len() counts missing values also
total_customers = len(orders['user_id'].nunique())
print("Total Orders:", total_orders)
print("Unique Customers:", total_customers)

#2
unique_products = len(products['product_name'].nunique())
unique_aisles = len(aisles['aisle_id'])
unique_departments = len(departments['department_id'])
print("Unique Products:", unique_products)
print("Unique Aisles:", unique_aisles)
print("Unique Departments:", unique_departments)

#3
top_products = order_items['product_id'].value_counts().head(20).reset_index()
top_products.columns = ['product_id', 'order_count']
top_products = top_products.merge(products, on='product_id')

#4
merged = order_items.merge(products, on='product_id')
merged = merged.merge(aisles, on='aisle_id')
merged = merged.merge(departments, on='department_id')
top_departments = merged['department'].value_counts().head(10)  #Top 10 departments by volume
top_aisles = merged['aisle'].value_counts().head(10)   #Top 10 aisles by volume
print("\nTop Departments:\n", top_departments)
print("\nTop Aisles:\n", top_aisles)

# Set up the figure and subplots
plt.figure(figsize=(14, 6))
# Plot 1: Top Departments
plt.subplot(1, 2, 1)
top_departments.plot(kind='barh', color='skyblue', edgecolor='black')
plt.title('Top 10 Departments by Order Volume')
plt.xlabel('Number of Orders')
plt.ylabel('Department')
plt.gca().invert_yaxis()  # Show highest at the top
# Plot 2: Top Aisles
plt.subplot(1, 2, 2)
top_aisles.plot(kind='barh', color='lightgreen', edgecolor='black')
plt.title('Top 10 Aisles by Order Volume')
plt.xlabel('Number of Orders')
plt.ylabel('Aisle')
plt.gca().invert_yaxis()

# Adjust layout and display
plt.tight_layout()
plt.show()

#5
reorder_rates = order_items.groupby('product_id')['reordered'].mean().reset_index()
reorder_rates = reorder_rates.merge(products, on='product_id')
most_reordered = reorder_rates.sort_values('reordered', ascending=False).head(10)   #Top 10 reordered products
print(most_reordered[['product_name', 'reordered']])

#6
basket_size = order_items.groupby('order_id').size().mean()
print("Average Basket Size:", basket_size)

#7
#Hour of the Day
plt.figure(figsize=(8,5))
orders['order_hour_of_day'].value_counts().sort_index().plot(kind='bar', color='orange')
plt.title("Orders by Hour of the Day")
plt.xlabel("Hour of Day")
plt.ylabel("Number of Orders")
plt.show()
#Day of the week
plt.figure(figsize=(8,5))
orders['order_dow'].value_counts().sort_index().plot(kind='bar', color='green')
plt.title("Orders by Day of the Week")
plt.xlabel("Day of Week (0=Sunday)")
plt.ylabel("Number of Orders")
plt.show()
#Days since prior order
plt.figure(figsize=(8,5))
orders['days_since_prior_order'].value_counts().sort_index().plot(kind='bar', color='blue')
plt.title("Orders by Days Since Prior Order")
plt.xlabel("Days")
plt.ylabel("Number of Orders")
plt.show()



