// Code execution functions
import { codeAPI } from '../../services/api';

// Types
interface CodeExecutionResult {
  success: boolean;
  data?: {
    output?: string;
  };
  error?: string;
}

interface LanguageOption {
  id: string;
  name: string;
  defaultCode: string;
}

// Language configurations
export const languageOptions: LanguageOption[] = [
  {
    id: "javascript",
    name: "JavaScript",
    defaultCode: `// Functions and Loops Example in JavaScript

// Function to calculate factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function to print multiplication table
function multiplicationTable(num) {
    console.log(\`Multiplication Table of \${num}:\`);
    for (let i = 1; i <= 10; i++) {
        console.log(\`\${num} x \${i} = \${num * i}\`);
    }
}

// Using loops to sum numbers
console.log("Sum of numbers 1 to 10:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Total: " + sum);

// Using while loop
console.log("\\nCounting down from 5:");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

// Using functions
console.log("\\nFactorial of 5: " + factorial(5));
multiplicationTable(7);`,
  },
  {
    id: "python",
    name: "Python",
    defaultCode: `# Functions and Loops Example in Python

# Function to calculate factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Function to print multiplication table
def multiplication_table(num):
    print(f"Multiplication Table of {num}:")
    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

# Using loops to sum numbers
print("Sum of numbers 1 to 10:")
total = 0
for i in range(1, 11):
    total += i
print(f"Total: {total}")

# Using while loop
print("\\nCounting down from 5:")
count = 5
while count > 0:
    print(count)
    count -= 1

# Using functions
print(f"\\nFactorial of 5: {factorial(5)}")
multiplication_table(7)`,
  },
  {
    id: "cpp",
    name: "C++",
    defaultCode: `#include <iostream>
using namespace std;

// Function to calculate factorial
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function to print multiplication table
void multiplicationTable(int num) {
    cout << "Multiplication Table of " << num << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << num << " x " << i << " = " << (num * i) << endl;
    }
}

int main() {
    // Using loops to sum numbers
    cout << "Sum of numbers 1 to 10:" << endl;
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    cout << "Total: " << sum << endl;

    // Using while loop
    cout << "\\nCounting down from 5:" << endl;
    int count = 5;
    while (count > 0) {
        cout << count << endl;
        count--;
    }

    // Using functions
    cout << "\\nFactorial of 5: " << factorial(5) << endl;
    multiplicationTable(7);

    return 0;
}`,
  },
];

// Code execution handler
export const handleCodeExecution = async (
  code: string,
  language: string,
  input: string,
  setOutput: (output: string) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  setOutput("Running...");

  try {
    // Validate inputs
    if (!code.trim()) {
      setOutput("Error: No code to execute");
      setLoading(false);
      return;
    }

    if (!language) {
      setOutput("Error: No language selected");
      setLoading(false);
      return;
    }

    const result: CodeExecutionResult = await codeAPI.executeCode(code, language, input);
    
    if (result.success) {
      setOutput(result.data?.output || "No output");
    } else {
      setOutput(result.error || "Execution failed");
    }
  } catch (error: unknown) {
    const executionError = error as { response?: { data?: { message?: string } } };
    setOutput(
      executionError?.response?.data?.message || 
      "Error: Failed to execute code. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

// Language change handler
export const handleLanguageChange = (
  newLanguage: string,
  setLanguage: (language: string) => void,
  setCode: (code: string) => void
) => {
  setLanguage(newLanguage);
  
  // Set default code for the selected language
  const selectedLanguage = languageOptions.find(lang => lang.id === newLanguage);
  if (selectedLanguage) {
    setCode(selectedLanguage.defaultCode);
  }
};

// Get language display name
export const getLanguageDisplayName = (languageId: string): string => {
  const language = languageOptions.find(lang => lang.id === languageId);
  return language?.name || languageId;
};

// Get default code for language
export const getDefaultCodeForLanguage = (languageId: string): string => {
  const language = languageOptions.find(lang => lang.id === languageId);
  return language?.defaultCode || "// write your code here...";
};

// Validate code input
export const validateCode = (code: string, language: string): string | null => {
  if (!code.trim()) {
    return "Code cannot be empty";
  }

  if (!language) {
    return "Please select a programming language";
  }

  // Language-specific basic validation
  switch (language) {
    case 'javascript':
      // Basic JavaScript validation (can be expanded)
      break;
    case 'python':
      // Basic Python validation (can be expanded)
      break;
    case 'cpp':
      // Basic C++ validation (can be expanded)
      if (!code.includes('#include')) {
        return "Warning: C++ code should include necessary headers";
      }
      if (!code.includes('main')) {
        return "Warning: C++ code should have a main function";
      }
      break;
    default:
      return "Unsupported programming language";
  }

  return null;
};

// Format code output
export const formatCodeOutput = (output: string): string => {
  if (!output) return "No output";
  
  // Remove excessive newlines
  return output.replace(/\n{3,}/g, '\n\n').trim();
};

// Check if language is supported
export const isLanguageSupported = (languageId: string): boolean => {
  return languageOptions.some(lang => lang.id === languageId);
};