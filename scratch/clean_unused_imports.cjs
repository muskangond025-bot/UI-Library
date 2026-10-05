const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/sections/account/03-address-book');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  // Clean unused imports
  code = code
    .replace("import { Home, Briefcase, MapPin, Plus, Check, Edit2, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';", "import { Home, Briefcase, MapPin, Plus, Check, Edit2, Trash2, ShieldCheck } from 'lucide-react';")
    .replace("const [addresses, setAddresses] = useState(mockAddresses);", "const [addresses] = useState(mockAddresses);")
    .replace("import { Plus, Check, MapPin } from 'lucide-react';", "import { MapPin } from 'lucide-react';")
    .replace("import { Shield, MapPin, Check, Plus, Edit3, Trash } from 'lucide-react';", "import { Shield, Edit3 } from 'lucide-react';")
    .replace("import { Star, CheckCircle, Home, Briefcase, Plus } from 'lucide-react';", "import { Star, CheckCircle } from 'lucide-react';")
    .replace("import { User, Phone, MapPin, Building, Flag, Check } from 'lucide-react';", "import { User, Phone, MapPin, Building, Flag } from 'lucide-react';")
    .replace("import { Plus, X, MapPin, Check } from 'lucide-react';", "import { Plus, X } from 'lucide-react';")
    .replace("import { MoreVertical, Edit2, Trash2, CheckCircle2, Home } from 'lucide-react';", "import { Edit2, Trash2, CheckCircle2, Home } from 'lucide-react';")
    .replace("import { Home, MapPin, Check } from 'lucide-react';", "import { Check } from 'lucide-react';")
    .replace("import { Home, Briefcase, MapPin, Plus } from 'lucide-react';", "import { MapPin } from 'lucide-react';")
    .replace("import { Home, Briefcase, MapPin, Phone, User } from 'lucide-react';", "import { Home, Phone, MapPin, User } from 'lucide-react';")
    .replace("import { Home, Briefcase, MapPin, Plus, Check, Star, ArrowUpRight } from 'lucide-react';", "import { Check } from 'lucide-react';");

  fs.writeFileSync(filePath, code);
});

console.log("Unused imports cleaned successfully.");
