import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
interface EmployeePost {
  name: string;
  position: string;
  description: string;
  date: Date;
}
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
 displayedColumns: string[] = ['name', 'position', 'description', 'date', 'action'];
  dataSource = new MatTableDataSource<EmployeePost>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    const mockData: EmployeePost[] = [
      {
        name: 'John Doe',
        position: 'Software Engineer',
        description: 'Requested 2 days leave.',
        date: new Date('2025-06-18')
      },
      {
        name: 'Priya Sharma',
        position: 'HR Manager',
        description: 'Conduct department event.',
        date: new Date('2025-06-17')
      },
      {
        name: 'Alex Smith',
        position: 'Accountant',
        description: 'Updated payroll report.',
        date: new Date('2025-06-15')
      }
    ];

    this.dataSource.data = mockData;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  approve(row: EmployeePost) {
    console.log('Approved:', row);
  }

  reject(row: EmployeePost) {
    console.log('Rejected:', row);
  }
}

