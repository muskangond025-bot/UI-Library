const fs = require('fs');

const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

const startIdx = content.lastIndexOf('  return (\n    <div className="p-8');
const altStartIdx = content.lastIndexOf('  return (');

const idx = startIdx > -1 ? startIdx : altStartIdx;

if (idx > -1) {
    const replacement = `  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">{category.replace(/-/g, ' ')} Sections</h2>
        <p className="text-gray-500 mt-2 text-lg">Browse and preview reusable sections for the {category.replace(/-/g, ' ')} category.</p>
      </div>
      
      <div className="flex flex-col gap-16">
        {sections.map((section, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          return (
            <div key={section.id} className="flex flex-col gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-light text-gray-400 font-mono">{num}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
                </div>
              </div>
              
              <div 
                className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group"
                onClick={() => onSelectSection(section.id)}
              >
                <div className="absolute inset-0 z-10 hidden group-hover:block bg-black/5" />
                <div className="w-full relative pointer-events-none origin-top" style={{ minHeight: '300px' }}>
                  {section.previewComponent}
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
              
              {index < sections.length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
`;
    content = content.substring(0, idx) + replacement;
    fs.writeFileSync(gridPath, content);
    console.log('Grid rendering successfully replaced');
} else {
    console.log('Could not find the starting tag');
}
