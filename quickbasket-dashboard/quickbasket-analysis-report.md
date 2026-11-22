# QuickBasket Grocery Data Analysis Report

## Executive Summary

This comprehensive analysis of QuickBasket's grocery delivery platform reveals key insights into customer behavior, product preferences, and purchasing patterns that can drive strategic business decisions for FreshMart.

### Key Findings
- **1,117 total orders** from **381 unique customers**
- **Average basket size**: 9.8 items per order
- **Top product**: Banana (165 orders - 15% of customers)
- **Peak ordering time**: 11:00 AM (591 orders)
- **Most popular combination**: Organic Baby Spinach + Banana (24 co-purchases)

---

## Task 1: Exploratory Data Analysis

### Customer & Order Overview
- **Total Orders**: 1,117 orders analyzed
- **Unique Customers**: 381 customers
- **Unique Products**: 4,857 different products available
- **Product Coverage**: 134 aisles across 21 departments

### Top 20 Most Popular Products
1. **Banana** - 165 orders (14.8% of all orders)
2. **Bag of Organic Bananas** - 142 orders (12.7%)
3. **Organic Baby Spinach** - 91 orders (8.1%)
4. **Organic Strawberries** - 88 orders (7.9%)
5. **Large Lemon** - 70 orders (6.3%)
6. **Organic Avocado** - 64 orders (5.7%)
7. **Organic Hass Avocado** - 64 orders (5.7%)
8. **Strawberries** - 60 orders (5.4%)
9. **Limes** - 51 orders (4.6%)
10. **Organic Baby Carrots** - 39 orders (3.5%)

### Department Performance
1. **Produce**: 3,315 orders (30.1% of total)
2. **Dairy Eggs**: 1,808 orders (16.4%)
3. **Beverages**: 921 orders (8.4%)
4. **Snacks**: 903 orders (8.2%)
5. **Frozen**: 781 orders (7.1%)

### Top Aisles by Volume
1. **Fresh Fruits**: 1,264 orders
2. **Fresh Vegetables**: 1,190 orders
3. **Packaged Vegetables/Fruits**: 611 orders
4. **Yogurt**: 444 orders
5. **Packaged Cheese**: 338 orders

### Customer Loyalty Insights
**Highest Reorder Rate Products** (100% reorder rate):
- Orange Sparkling Water
- Unsweetened Vanilla Almond Milk  
- Plain Bagels
- Organic Whole Wheat Bread
- Pure Coconut Water
- Organic Milk

### Shopping Behavior Analysis
- **Average Basket Size**: 9.8 items per order
- **Median Basket Size**: 8.0 items per order
- **Basket Size Range**: 1 to 51 items
- **Most Common Basket Sizes**: 3 items (8.0%), 5 items (7.5%), 4 items (7.0%)

### Temporal Ordering Patterns

#### Peak Ordering Hours
- **11:00 AM**: 591 orders (8.4%)
- **4:00 PM**: 589 orders (8.4%)  
- **12:00 PM**: 580 orders (8.3%)
- **3:00 PM**: 580 orders (8.3%)
- **1:00 PM**: 577 orders (8.2%)

#### Weekly Distribution
- **Monday**: 1,303 orders (18.6%)
- **Sunday**: 1,281 orders (18.3%)
- **Friday**: 978 orders (14.0%)
- **Saturday**: 946 orders (13.5%)
- **Wednesday**: 847 orders (12.1%)

#### Reorder Patterns
- **Average days between orders**: 10.2 days
- **Median reorder interval**: 7 days
- **Peak intervals**: 30 days (10.4%) and 7 days (10.2%)

---

## Task 2: Market Basket Analysis

### Top Product Combinations
1. **Organic Baby Spinach + Banana**: 24 co-purchases
2. **Banana + Large Lemon**: 23 co-purchases
3. **Bag of Organic Bananas + Organic Baby Spinach**: 21 co-purchases
4. **Bag of Organic Bananas + Organic Strawberries**: 20 co-purchases
5. **Banana + Organic Avocado**: 20 co-purchases

### Association Rules Analysis
**Top combinations by Lift coefficient**:
1. **Limes → Large Lemon**: Lift 4.69, Confidence 29%
2. **Organic Strawberries → Organic Whole Milk**: Lift 3.91, Confidence 14%
3. **Large Lemon → Organic Avocado**: Lift 3.74, Confidence 21%
4. **Banana → Organic Fuji Apple**: Lift 3.49, Confidence 10%

### Key Insights from Combinations
- **Fresh produce dominates** combinations
- **Bananas act as a "hub product"** - frequently paired with other items
- **Organic products cluster together** - customers buying organic tend to buy multiple organic items
- **Complementary cooking ingredients** appear together (lemon + avocado, onions + bananas)

---

## Task 3: Business Recommendations

### 📊 Inventory Management

#### High-Priority Stock Items
Focus inventory investment on these top performers:
- **Banana**: 165 orders (universal appeal)
- **Bag of Organic Bananas**: 142 orders (premium segment)
- **Organic Baby Spinach**: 91 orders (health-conscious)
- **Organic Strawberries**: 88 orders (premium fresh)
- **Large Lemon**: 70 orders (cooking essential)

#### Customer Loyalty Drivers
Maintain premium quality and availability for 100% reorder rate products:
- Specialty beverages (Orange Sparkling Water, Pure Coconut Water)
- Healthy alternatives (Unsweetened Almond Milk, Organic Milk)
- Premium bread products (Organic Whole Wheat Bread, Plain Bagels)

### 📦 Product Bundling Strategy

#### "Fresh & Healthy" Bundle Opportunities
Based on strong co-purchase patterns:
1. **"Smoothie Essentials"**: Banana + Organic Baby Spinach + Organic Strawberries
2. **"Cooking Basics"**: Large Lemon + Organic Avocado + Yellow Onions  
3. **"Organic Starter Pack"**: Bag of Organic Bananas + Organic Baby Spinach + Organic Carrots
4. **"Citrus Collection"**: Large Lemon + Limes + Organic Avocado

#### Cross-Department Opportunities
- **Produce + Dairy**: Fresh fruits with yogurt and milk
- **Produce + Beverages**: Health-focused combinations
- **Bakery + Dairy**: Breakfast essentials bundle
- **Snacks + Beverages**: Convenience combos

### 📱 Promotional Timing Strategy

#### Optimal Push Notification Times
**Weekday Schedule**:
- Primary window: 11:00 AM - 1:00 PM
- Secondary window: 3:00 PM - 4:00 PM

**Peak Promotion Days**:
- **Monday**: Highest traffic day (18.6% of orders)
- **Sunday**: Strong weekend activity (18.3%)
- **Friday**: End-of-week shopping (14.0%)

#### Re-engagement Campaign Timing
- **Send re-engagement emails after 12 days** (average + 2 buffer)
- **Weekly shoppers**: Target after 10 days of inactivity
- **Monthly shoppers**: Re-engage after 35 days

### 🏷️ Featured Product Strategy

#### Homepage Banner Recommendations
**Rotate these proven performers**:
1. **Banana** - Universal appeal, drives traffic
2. **Organic Baby Spinach** - Health positioning, high loyalty
3. **Organic Strawberries** - Premium category, visual appeal
4. **Large Lemon** - Cooking essential, versatile use

#### Category Promotion Calendar
**Monthly rotation by department performance**:
- **Month 1-2**: Produce (30% of orders) - "Fresh & Organic"
- **Month 3-4**: Dairy/Eggs (16%) - "Daily Essentials"  
- **Month 5-6**: Beverages (8%) - "Hydration Station"
- **Month 7-8**: Snacks (8%) - "Better-for-You Snacking"

### 💰 Revenue Optimization

#### Premium Product Focus
- **Promote organic alternatives** to popular conventional items
- **Cross-sell organic products** based on basket analysis
- **Price organic bundles competitively** to increase basket value

#### Basket Size Enhancement
**Current**: 9.8 items average → **Target**: 11.8 items (+20%)

**Strategies**:
1. **Checkout suggestions** based on combination analysis
2. **Free delivery thresholds** at 10-12 items
3. **Bulk purchase incentives** for top products
4. **Personalized recommendations** using purchase history

### 📈 Customer Acquisition & Retention

#### Gateway Products for New Customers
- **Banana**: Low-risk, universally liked entry point
- **Spring Water**: Convenience positioning
- **Organic Baby Spinach**: Health-conscious positioning
- **Strawberries**: Premium fresh experience

#### Retention Strategies
- **Loyalty program** focused on high-reorder products
- **Subscription options** for weekly essentials
- **Seasonal promotions** aligned with purchase cycles
- **Personalized deals** based on individual buying patterns

---

## Key Performance Indicators

### Success Metrics to Track
1. **Basket Size Increase**: Target 20% growth from 9.8 to 11.8 items
2. **Customer Retention**: Reduce churn in 12-day inactive segment  
3. **Premium Product Penetration**: Increase organic product % in baskets
4. **Cross-Category Purchases**: Boost multi-department orders
5. **Peak Hour Conversion**: Maximize orders during 11 AM-4 PM window

### Implementation Timeline
- **Week 1-2**: Implement top product bundles and checkout suggestions
- **Week 3-4**: Launch optimized promotional timing strategy  
- **Month 2**: Roll out personalized recommendations engine
- **Month 3**: Evaluate performance and optimize based on results

---

## Conclusion

The analysis reveals QuickBasket customers have strong preferences for fresh, healthy products with bananas serving as a universal favorite. The dominance of produce (30% of orders) and high reorder rates for organic products indicate a health-conscious customer base willing to pay premium prices for quality.

**Immediate opportunities** include optimizing inventory for the top 20 products, implementing smart bundling strategies, and timing promotions during peak hours (11 AM-1 PM). The strong association patterns between organic products suggest significant potential for premium bundle offerings.

**Long-term growth** will come from increasing basket sizes through personalized recommendations, improving customer retention with targeted re-engagement campaigns, and expanding the organic product selection to capitalize on the loyal, health-conscious customer segment.

This data-driven approach positions FreshMart to maximize revenue per customer while improving the overall shopping experience on the QuickBasket platform.