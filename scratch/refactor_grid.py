import re

with open(r"c:\UI Library\src\components\section-library\SectionLibraryGrid.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# We want to replace the `export function SectionLibraryGrid` part
# It looks like:
# export function SectionLibraryGrid({ category, onSelectSection }: { category: string, onSelectSection: (id: string | null) => void }) {
#   const sections = 
#     category === 'hero' ? [
# ...
#   ] : [];
# 
#   return (
# ...
#   );
# }

# Let's find the start of export function SectionLibraryGrid
start_idx = content.find("export function SectionLibraryGrid")

if start_idx == -1:
    print("Could not find SectionLibraryGrid")
    exit(1)

# Before we replace, let's extract the `const sections = ` part to a new function
# We can find `const sections = \n    category === 'hero' ? [`
sections_start_idx = content.find("const sections = \n    category === 'hero' ? [", start_idx)

if sections_start_idx == -1:
    sections_start_idx = content.find("const sections =", start_idx)

# Find the end of `const sections = ... : [];`
end_of_sections = content.find("] : [];", sections_start_idx)
if end_of_sections == -1:
    end_of_sections = content.find("] : [];", sections_start_idx) # try again? wait, it might be `] : [];` or `] : [];\n`

if end_of_sections != -1:
    end_of_sections += len("] : [];")
else:
    # try `] : []`
    end_of_sections = content.find("] : []", sections_start_idx)
    end_of_sections += len("] : []")

sections_code = content[sections_start_idx:end_of_sections]

# Remove `const sections = ` and replace with `function getSectionsForCategory(category: string) { return `
sections_function = "function getSectionsForCategory(category: string) {\n  return " + sections_code.replace("const sections = \n    ", "").replace("const sections =\n    ", "").replace("const sections =", "").strip() + ";\n}"

new_grid_component = """
import { homeCategories, productCategories } from './navigationData';
import { Code, Copy, Check } from 'lucide-react';
import { useState } from 'react';

""" + sections_function + """

export function SectionLibraryGrid({ category }: { category: string }) {
  const groups = category === 'home' ? homeCategories : productCategories;

  const padNum = (num: number) => num.toString().padStart(2, '0');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full">
      {groups.map((group, groupIndex) => {
        const sections = getSectionsForCategory(group.mappedId || group.id);
        if (!sections || sections.length === 0) return null;

        return (
          <div key={group.id} id={group.id} className="w-full mb-32">
            <div className="px-8 lg:px-12 max-w-[1600px] mx-auto w-full mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">
                {padNum(groupIndex + 1)} — {group.label}
              </h2>
              <p className="text-gray-500 mt-2 text-lg">
                Premium reusable {group.label.toLowerCase()} sections for your website.
              </p>
            </div>
            
            <div className="flex flex-col gap-24">
              {sections.map((section: any, index: number) => {
                const num = (index + 1).toString().padStart(2, '0');
                return (
                  <div key={section.id} className="flex flex-col w-full">
                    <div className="px-8 lg:px-12 max-w-[1600px] mx-auto w-full mb-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-3 mb-2">
                            <span className="text-2xl font-light text-gray-400 font-mono">{num}</span>
                            <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">{section.title}</h3>
                          </div>
                          <p className="text-gray-500 max-w-3xl">
                            {section.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                            onClick={() => copyToClipboard(JSON.stringify(section.previewComponent.props.data, null, 2))}
                            title="Copy JSON"
                          >
                            <Code size={16} />
                            JSON
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full border-y border-gray-200 bg-white">
                      <div className="w-full">
                        {section.previewComponent}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
"""

# Replace the old component
new_content = content[:start_idx] + new_grid_component

# Need to fix imports if missing.
# Let's save the result to a new file to verify, or overwrite.
with open(r"c:\UI Library\src\components\section-library\SectionLibraryGrid.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Modified SectionLibraryGrid.tsx successfully!")
