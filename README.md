# Stratify '25 – QuickBasket Basket Breakdown

Code and outputs for the **Stratify Business Analytics Bootcamp 2025** project
*"Decoding the Basket"*: analysing grocery order data from QuickBasket to give
FreshMart data-driven recommendations on improving online sales.

The task brief is in [`QuickBasket Basket Breakdown.pdf`](QuickBasket%20Basket%20Breakdown.pdf)
and the final presentation is [`Stratify.pdf`](Stratify.pdf).

## Data

The raw order tables are not stored in this repo. They live in a **private**
Hugging Face dataset: `Accayo/stratify-2025-data`
(<https://huggingface.co/datasets/Accayo/stratify-2025-data>, requires access).

| File | Contents |
|---|---|
| `order_items__prior.csv` (~578 MB) | `order_id, product_id, add_to_cart_order, reordered` for prior orders |
| `order_items__train.csv` (~25 MB) | same schema, train orders |
| `order_metadata.csv` (~109 MB) | `order_id, user_id, eval_set, order_number, order_dow, order_hour_of_day, days_since_prior_order` |

The small lookup tables are committed here: `product_catalog.csv`,
`aisle_info.csv`, `department_info.csv`.

To run the notebooks, download the three CSVs from the dataset page and place
them in the repo root (the notebooks read them by these names).

## Repository layout

| Path | What it is |
|---|---|
| `Python stratify.py` | Task 1 EDA as a script: counts, top products/aisles/departments, reorder rates, basket size, order timing |
| `QuickBasket_Task1_EDA.ipynb`, `QuickBasket_Task1_EDA_single_prior.ipynb`, `QuickBasket_EDA_Analysis.ipynb` | Task 1 EDA notebooks |
| `QuickBasket_Complete_Analysis.ipynb`, `QuickBasket-Complete-Analysis.ipynb`, `QuickBasket-Comprehensive-Analysis.ipynb` | Full analysis notebooks |
| `QuickBasket_Complete_Analysis_repaired.ipynb`, `fix.py` | `fix.py` rebuilds a corrupted copy of the Complete Analysis notebook into the `_repaired` version |
| `customer_segments.csv`, `segment_summary.csv` | Per-customer segments and segment-level summary |
| `business_recommendations.csv`, `top_20_products.csv`, `top_reorder_products.csv`, `department_volumes.csv`, `comprehensive_analysis.png` | Summary outputs |
| `quickbasket-dashboard/` | Static dashboard (`index.html`, `app.js`, `style.css`) with its data CSVs, charts and written report. Open `index.html` in a browser (loads Chart.js from a CDN) |
| `Stratify.pdf` | Final presentation deck |

## Notes

- Some notebooks were saved with outputs, so a few are several MB.
- The dashboard figures (for example 1,117 orders / 381 customers) come from a
  sample of the data, not the full order tables.
