import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  stats = { pending: 0, completed: 0, cancelled: 0, approved: 0 };
  pieLabels: string[] = [];
  pieData!: ChartData<'pie', number[], string>;
  barLabels: string[] = [];
  barData!: ChartData<'bar', number[], string>;
  recentActivity: string[] = [];
  upcomingBirthdays: { name: string; dob: Date }[] = [];

  chartOptions: ChartOptions = { responsive: true };

  constructor(private empSvc: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
    this.loadActivity();
    this.loadBirthdays();
    this.loadStats();
  }

  loadEmployees() {
    this.empSvc.getEmployeeList().subscribe((employees) => {
      const deptCount: Record<string, number> = {};
      employees.forEach(
        (e: { department: string | number }) =>
          (deptCount[e.department] = (deptCount[e.department] || 0) + 1)
      );
      this.pieLabels = Object.keys(deptCount);
      this.pieData = {
        labels: this.pieLabels,
        datasets: [
          {
            data: Object.values(deptCount),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e44ad'],
          },
        ],
      };
      this.barLabels = ['Jan', 'Feb', 'Mar', 'Apr'];
      this.barData = {
        labels: this.barLabels,
        datasets: [
          {
            label: 'Attendance',
            data: [80, 90, 85, 95],
            backgroundColor: '#3498db',
          },
        ],
      };
    });
  }

  loadActivity() {
    this.recentActivity = [
      'John submitted leave request',
      'Priya uploaded monthly report',
      'Alex approved post "Milestone"',
    ];
  }
  loadBirthdays() {
    this.empSvc.getEmployeeList().subscribe((employees: any[]) => {
      const today = new Date();
      const upcoming = employees.filter((e) => {
        const dob = new Date(e.dob);
        return (
          dob.getMonth() === today.getMonth() &&
          dob.getDate() >= today.getDate()
        );
      });

      this.upcomingBirthdays = upcoming.map((emp) => ({
        name: `${emp.firstName} ${emp.lastName}`,
        dob: new Date(emp.dob),
      }));
    });
  }
  loadStats() {
    this.empSvc.getAllPosts().subscribe((posts: any[]) => {
      this.stats.pending = posts.filter((p) => p.status === 'pending').length;
      this.stats.completed = posts.filter(
        (p) => p.status === 'completed'
      ).length;
      this.stats.cancelled = posts.filter(
        (p) => p.status === 'cancelled'
      ).length;
      this.stats.approved = posts.filter((p) => p.status === 'approved').length;
    });
  }
}
