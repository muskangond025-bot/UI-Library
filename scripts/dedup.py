import re

# Clean SectionLibraryGrid.tsx
grid_path = '../src/components/section-library/SectionLibraryGrid.tsx'
with open(grid_path, 'r', encoding='utf-8') as f:
    grid_content = f.read()

# The original grid ALREADY had imports and grid items for 11-20!
# We just need to remove what we added at the end of the file.

# Find the LAST occurrence of "import ProductGallery11"
last_import_pg11 = grid_content.rfind("import ProductGallery11")
first_import_pg11 = grid_content.find("import ProductGallery11")

if last_import_pg11 != -1 and last_import_pg11 != first_import_pg11:
    # We found duplicates!
    # Our injected block starts with "import ProductGallery11" and ends after "import productGallery20Data...json';"
    block_end_marker = "import productGallery20Data from '../sections/product/01-product-gallery/product-gallery-20/product-gallery-20.json';\n"
    end_idx = grid_content.find(block_end_marker, last_import_pg11) + len(block_end_marker)
    
    # Remove the duplicate import block
    grid_content = grid_content[:last_import_pg11] + grid_content[end_idx:]

# Now remove the duplicate dictionary entries.
# They look like:
#        {
#          id: 'product-gallery-11',
#          title: 'Product Gallery 11',
# ...
#        },

duplicate_array_start = grid_content.rfind("        {\n          id: 'product-gallery-11',")
first_array_start = grid_content.find("          id: 'product-gallery-11',") # original might not have the exact same whitespace

if duplicate_array_start != -1 and duplicate_array_start > grid_content.find("product-gallery-11") + 100:
    # Our duplicate block ends after "product-gallery-20" preview component
    block_end_marker_arr = "previewComponent: <ProductGallery20 data={productGallery20Data as any} />\n        },\n"
    end_arr_idx = grid_content.find(block_end_marker_arr, duplicate_array_start) + len(block_end_marker_arr)
    grid_content = grid_content[:duplicate_array_start] + grid_content[end_arr_idx:]

with open(grid_path, 'w', encoding='utf-8') as f:
    f.write(grid_content)

print("Duplicates removed from Grid!")
