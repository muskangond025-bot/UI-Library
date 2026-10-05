import os

grid_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../src/components/section-library/SectionLibraryGrid.tsx'))
imports_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'order_imports.txt'))

with open(grid_path, 'r', encoding='utf-8') as f:
    grid_code = f.read()

with open(imports_path, 'r', encoding='utf-8') as f:
    order_imports = f.read()

# 1. Add imports at the top
grid_code = order_imports + '\n' + grid_code

# 2. Update navigationData import
grid_code = grid_code.replace(
    "import { homeCategories, productCategories, cartCategories, checkoutCategories } from './navigationData';",
    "import { homeCategories, productCategories, cartCategories, checkoutCategories, orderCategories } from './navigationData';"
)

# 3. Generate order category branches for getSectionsForCategory
subcats = [
    ('order-success', 'OrderSuccess', 'ORDER SUCCESS SECTION'),
    ('order-summary', 'OrderSummary', 'ORDER SUMMARY'),
    ('order-delivery-information', 'OrderDeliveryInformation', 'DELIVERY INFORMATION'),
    ('order-recommended-products', 'OrderRecommendedProducts', 'RECOMMENDED PRODUCTS'),
    ('order-customer-support', 'OrderCustomerSupport', 'CUSTOMER SUPPORT'),
    ('order-continue-shopping', 'OrderContinueShopping', 'CONTINUE SHOPPING')
]

branches_code = ""
for cat_id, prefix, title in subcats:
    branches_code += f"    ] : category === '{cat_id}' ? [\n"
    for i in range(1, 21):
        comp_name = f"{prefix}{i}"
        data_var = f"{cat_id.replace('-', '')}{i}Data"
        item_id = f"{cat_id}-{i}"
        item_title = f"{title} — VARIANT {str(i).zfill(2)}"
        branches_code += f"      {{ id: '{item_id}', title: {data_var}.title || '{item_title}', description: {data_var}.description || 'Order section variant {i}', previewComponent: <{comp_name} data={{{data_var} as any}} /> }}{',' if i < 20 else ''}\n"

target_end = "      { id: 'checkout-security-trust-20', title: checkoutsecuritytrust20Data.title || 'Security / Trust Section 20', description: checkoutsecuritytrust20Data.description || 'Placeholder for Security / Trust Section variant 20', previewComponent: <CheckoutSecurityTrust20 data={checkoutsecuritytrust20Data as any} /> }\n    ] : [];"

replacement_end = "      { id: 'checkout-security-trust-20', title: checkoutsecuritytrust20Data.title || 'Security / Trust Section 20', description: checkoutsecuritytrust20Data.description || 'Placeholder for Security / Trust Section variant 20', previewComponent: <CheckoutSecurityTrust20 data={checkoutsecuritytrust20Data as any} /> }\n" + branches_code + "    ] : [];"

if target_end in grid_code:
    grid_code = grid_code.replace(target_end, replacement_end)
else:
    print("WARNING: target_end not found!")

# 4. Update activeCat and groups array
grid_code = grid_code.replace(
    "else if (activeCat === 'checkout') {\n    activeCat = 'checkout-header';\n  }",
    "else if (activeCat === 'checkout') {\n    activeCat = 'checkout-header';\n  } else if (activeCat === 'order') {\n    activeCat = 'order-success';\n  }"
)

grid_code = grid_code.replace(
    "groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories].filter(g => g.id === activeCat);",
    "groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories, ...orderCategories].filter(g => g.id === activeCat);"
)

with open(grid_path, 'w', encoding='utf-8') as f:
    f.write(grid_code)

print("Successfully patched SectionLibraryGrid.tsx!")
