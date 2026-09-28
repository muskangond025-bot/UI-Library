import os

preview_layout_path = '../src/components/section-library/SectionPreviewLayout.tsx'
with open(preview_layout_path, 'r', encoding='utf-8') as f:
    content = f.read()

imports_to_add = ""
for i in range(11, 21):
    imports_to_add += f"import ProductGallery{i} from '../sections/product/01-product-gallery/product-gallery-{i}/ProductGallery{i}';\n"
    imports_to_add += f"import productGallery{i}Data from '../sections/product/01-product-gallery/product-gallery-{i}/product-gallery-{i}.json';\n"

last_import_index = content.rfind('import ')
last_import_end = content.find('\n', last_import_index)
content = content[:last_import_end + 1] + imports_to_add + content[last_import_end + 1:]

cases_to_add = ""
for i in range(11, 21):
    cases_to_add += f") : sectionId === 'product-gallery-{i}' ? (\n              <ProductGallery{i} data={{sectionData || productGallery{i}Data as any}} />\n            "

render_anchor = ") : sectionId.startsWith('product-grid-') ? ("
content = content.replace(render_anchor, cases_to_add + render_anchor)

with open(preview_layout_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Successfully injected 11-20 into SectionPreviewLayout.tsx')
