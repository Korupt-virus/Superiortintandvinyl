#!/usr/bin/env python3
"""
Simple HTTP Server for testing the Superior Tint and Vinyl website locally.
Run this script and visit http://localhost:8000 in your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configuration
PORT = 8000
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve index.html for directory requests"""
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Serve index.html for root directory requests
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def main():
    # Change to the website directory
    website_dir = Path(__file__).parent
    os.chdir(website_dir)
    
    # Check if index.html exists
    if not os.path.exists('index.html'):
        print("❌ Error: index.html not found in the current directory!")
        print(f"Current directory: {os.getcwd()}")
        sys.exit(1)
    
    # Create server
    with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        server_url = f"http://{HOST}:{PORT}"
        
        print("🚀 Superior Tint and Vinyl - Local Development Server")
        print("=" * 50)
        print(f"📁 Serving files from: {website_dir}")
        print(f"🌐 Server running at: {server_url}")
        print("=" * 50)
        print("📝 Instructions:")
        print("   • Open your browser and go to the URL above")
        print("   • Press Ctrl+C to stop the server")
        print("   • Refresh the page after making changes to see updates")
        print("=" * 50)
        
        # Optional: Auto-open browser (uncomment the line below if desired)
        # webbrowser.open(server_url)
        
        try:
            print(f"✅ Server started successfully! Listening on port {PORT}...")
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")
        except Exception as e:
            print(f"❌ Server error: {e}")

if __name__ == "__main__":
    main()
