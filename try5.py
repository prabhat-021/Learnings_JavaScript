from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import time
import random

CHROME_DRIVER_PATH = r"E:\chromedriver-win64\chromedriver-win64\chromedriver.exe"

# Create a service object
service = Service(executable_path=CHROME_DRIVER_PATH)

EMPLOYMENT_OPTIONS = ['Student', 'Employed', 'Self Employed', 'Unemployed', 'Fresher']
EDUCATION_OPTIONS = ['10th (High School)', '12th (Senior Secondary)', 'Graduate', 'Post Graduate', 'Doctorate']
CATEGORY_OPTIONS = [
    'BFSI Internship', 'Digital Marketing  Internships', 'IT Internships', 'Relationship Executive Internships',
    'Business Development Internships', 'Sales Internships', 'Portfolio Internships', 'Web Development Internships',
    'Software Development Internships', 'Pharma Intern', 'Medical Coding Intern', 'AI', 'DataScience',
    'Cybersecurity', 'Human Resource', 'Financial Analyst'
]

def generate_user_data(index):
    return {
        'first_name': f'First{index}',
        'last_name': f'Last{index}',
        'username': f'user991{index}',
        'email': f'user{index}@example.com',
        'mobile': f'999999{str(index).zfill(4)}',
        'password': 'TestPass123!',
        'key_skills': 'Java, Python, SQL',
        'employment_status': random.choice(EMPLOYMENT_OPTIONS),
        'education_level': random.choice(EDUCATION_OPTIONS),
        'category': random.choice(CATEGORY_OPTIONS)
    }

def register_user(data):
    driver = webdriver.Chrome(service=service)
    wait = WebDriverWait(driver, 10)
    driver.get('https://test.internboot.com/')

    try:
        time.sleep(2)

        # Fill form
        driver.find_element(By.NAME, "firstName").send_keys(data['first_name'])
        driver.find_element(By.NAME, "lastName").send_keys(data['last_name'])
        driver.find_element(By.NAME, "username").send_keys(data['username'])
        driver.find_element(By.NAME, "email").send_keys(data['email'])
        driver.find_element(By.NAME, "mobileNumber").send_keys(data['mobile'])
        driver.find_element(By.NAME, "password").send_keys(data['password'])
        driver.find_element(By.NAME, "keySkills").send_keys(data['key_skills'])

        Select(driver.find_element(By.NAME, "employment")).select_by_visible_text(data['employment_status'])
        Select(driver.find_element(By.NAME, "education")).select_by_visible_text(data['education_level'])
        Select(driver.find_element(By.NAME, "category")).select_by_visible_text(data['category'])

        # Upload profile picture
        driver.find_element(By.NAME, "profilePicture").send_keys(r"E:\Josh\food.png")

        # Agree to terms (ensure checkbox is visible and interactable)
        checkbox = wait.until(EC.element_to_be_clickable((By.ID, "terms")))
        driver.execute_script("arguments[0].scrollIntoView(true);", checkbox)
        driver.execute_script("arguments[0].click();", checkbox)

        # Submit button
        submit_btn = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']")))
        driver.execute_script("arguments[0].scrollIntoView(true);", submit_btn)
        driver.execute_script("arguments[0].click();", submit_btn)

        time.sleep(5)
        print(f"User {data['username']} submitted successfully.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

def main():
    for i in range(1, 3):  # Use small range to test
        user_data = generate_user_data(i)
        register_user(user_data)

if __name__ == "__main__":
    main()
